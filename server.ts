// server.ts - Next.js Standalone + Socket.IO
import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || '0.0.0.0';

// Custom server with Socket.IO integration
async function createCustomServer() {
  try {
    // Create Next.js app
    const nextApp = next({ 
      dev,
      dir: process.cwd(),
      conf: dev ? undefined : { distDir: './.next' }
    });

    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    // Create HTTP server that will handle both Next.js and Socket.IO
    const server = createServer((req, res) => {
      // Skip socket.io requests from Next.js handler
      if (req.url?.startsWith('/api/socketio')) {
        return;
      }
      handle(req, res);
    });

    // Setup Socket.IO (optional - only if socket.ts exists)
    try {
      const { setupSocket } = await import('./src/lib/socket');
      const io = new Server(server, {
        path: '/api/socketio',
        cors: {
          origin: "*",
          methods: ["GET", "POST"]
        }
      });
      setupSocket(io);
      console.log(`> Socket.IO server configured`);
    } catch (err) {
      // Socket.IO setup is optional
      console.log(`> Socket.IO setup skipped (socket.ts not found or not needed)`);
    }

    // Start the server
    server.listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
      if (process.env.NODE_ENV === 'development') {
        console.log(`> Open http://localhost:${port} to view the app`);
      }
    });

  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
}

// Start the server
createCustomServer();
