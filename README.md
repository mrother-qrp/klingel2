# 🔔 Klingel2 – A Simple PWA with a Ring Button

**Klingel2** is a minimalist Progressive Web App (PWA) that plays an old-fashioned phone ringtone when a button is pressed. It can be used as a regular website or installed as a PWA (except on iOS within the EU due to recent restrictions).

## 🚀 Live Demo

👉 [Launch Klingel2](https://mrother-qrp.github.io/klingel2/)  

## 📦 Features

- Centered button labeled **“Klingel2”**
- Classic phone ringtone plays on click
- PWA support: manifest, service worker, caching
- Offline-capable (except iOS in the EU)
- Installable on Android, Windows, macOS, and iOS (outside the EU)

## ⚠️ Important Note for iOS Users in the EU

As of iOS 17.4, Apple has **disabled key PWA features in the EU** in response to the Digital Markets Act (DMA):

- ❌ No home screen installation
- ❌ No offline support
- ❌ No push notifications
- ❌ No standalone window mode

These restrictions apply **only to iOS in the EU**. On Android, desktop, or iOS outside the EU, the app functions as a full PWA.

## 🧪 How to Test

1. Clone or fork this repository
2. Open `index.html` locally, or deploy using GitHub Pages
3. On Android: Open in Chrome → menu → *“Add to Home screen”*
4. On desktop (Chrome): Click the install icon in the address bar

## 📁 Project Structure

´´´text
klingel2/
├── index.html         # Main app with button and audio logic
├── manifest.json      # PWA manifest file (name, icon, behavior)
├── sw.js              # Service Worker for offline support
├── icon-192.png       # App icon for Android/Chrome (192×192)
├── icon-512.png       # App icon for Android/Chrome (512×512)
├── .nojekyll          # Prevents GitHub Pages from ignoring sw.js
└── README.md          # Project description and usage instructions
