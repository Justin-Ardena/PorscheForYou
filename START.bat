@echo off
REM PorscheForYou - Quick Start Script for Windows

echo.
echo 🏁 PorscheForYou - Starting Application
echo ======================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo ✅ Dependencies installed!
    echo.
)

echo 🚀 Starting development server...
echo 📍 Application will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
