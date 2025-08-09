# Genie - All-in-One Wishlists

**A browser extension that creates unified wishlists across multiple e-commerce platforms.**

## Overview

Genie simplifies online shopping by allowing you to save products from different stores into a single, centralized wishlist. Instead of managing separate wishlists on Amazon, Myntra, and other platforms, Genie consolidates everything in one place for easy comparison and management.

**🌐 [Visit Website](https://genie-extension.vercel.app/)**  
**🛒 [Download from Edge Store](https://microsoftedge.microsoft.com/addons/detail/genie/jcihbfcclnmphmncfeplhcbknbijpjme)**

## What It Does

- **Unified Wishlist**: Save products from Amazon.in and Myntra.com into one central wishlist
- **Cross-Platform Comparison**: Compare prices and availability across different stores
- **One-Click Saving**: Press the "Genie it" button on any product page to add items instantly
- **Centralized Management**: View and organize all your saved products in one place

## Demo

![Demo Video](./client/public/demo.mp4)

_See Genie in action - saving products across platforms and managing them in a unified interface._

## How It Works

1. **Browse**: Shop on Amazon.in or Myntra.com as usual
2. **Save**: Click the "Genie it" button that appears on product pages
3. **Access**: Open Genie from your browser toolbar to see all saved items
4. **Manage**: View, compare, and organize your cross-platform wishlist

## Architecture

```
Genie Extension
├── Browser Extension (Manifest V3)
│   ├── Content Scripts (Amazon, Myntra integration)
│   ├── Background Service Worker
│   └── Popup Interface
├── Web Application (React + Vite)
│   ├── Unified Wishlist Dashboard
│   ├── Product Management Interface
│   └── Cross-platform Analytics
└── Backend Services
    ├── Supabase Database
    ├── Product Data Sync
    └── User Management
```

**Tech Stack:**

- **Extension**: Vanilla JavaScript, Manifest V3
- **Frontend**: React 18, Vite, TailwindCSS v4
- **Styling**: Neopop design system

## Design System

Genie uses a **Neopop-inspired design language** featuring:

- **Bold, High-Contrast Colors**: Vibrant yellows (`#FFCB45`), purples (`#D59FFF`), and greens (`#EFFEC4`)
- **Strong Typography**: Cirka and Gilroy fonts for maximum readability
- **Playful Elements**: Star decorations and geometric patterns
- **Dark Mode Support**: Seamless switching between light and dark themes
- **Responsive Grid**: Adapts beautifully across all device sizes

The design emphasizes clarity and joy in the shopping experience, making wishlist management both functional and delightful.

## Supported Platforms

- ✅ **Amazon.in** - Full product saving and metadata extraction
- ✅ **Myntra.com** - Complete integration with product details
- 🔄 **More platforms coming soon**

## Installation

1. Download the extension from the Edge Store (link coming soon)
2. Add to your browser
3. Visit any supported e-commerce site
4. Start saving products with the "Genie it" button

---

_Made with ❤️ for simplified online shopping_
