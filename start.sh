#!/bin/bash
# PorscheForYou - Quick Start Script

echo "🏁 PorscheForYou - Starting Application"
echo "======================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
    echo ""
fi

echo "🚀 Starting development server..."
echo "📍 Application will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
