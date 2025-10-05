---
title: 'REP.js Improved'
pubDate: 2025-10-05
description: 'Modern PWA for strength training with cloud sync, analytics, and Apple HIG-aligned design system.'
github: 'https://github.com/xyzluca/repjs'
status: 'live'
tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite']
---

_A complete rebuild of my original REP.js project, now featuring a modern React + TypeScript architecture with real-time cloud sync and a comprehensive design system. Currently in active development for personal use._

## What I'm Building

REP.js Improved is a progressive web app that makes strength training data tracking both powerful and effortless. Unlike the original vanilla JavaScript version, this iteration focuses on a polished user experience while maintaining the technical depth serious lifters need.

::link{url="https://repjs.vercel.app"}

The app centers around three core pillars:

**Smart Workout Logging** - Quick entry forms optimized for the gym environment. Log sets with weight, reps, and RPE (Rate of Perceived Exertion) in seconds. The interface is designed for one-handed use with 44×44px touch targets and a fixed bottom navigation that stays accessible during workouts.

**Cloud Sync & Analytics** - Every logged set syncs instantly to Supabase, making your data accessible across all devices. The analytics dashboard visualizes progress over time, tracks personal records, and provides weekly summaries to identify training patterns and recovery needs.

**Achievement System** - Gamification through unlockable badges for workout streaks (3, 7, 30 days), volume milestones (1, 10, 50 tons moved), and set count achievements. Progress bars show how close you are to the next milestone, creating motivation beyond just the numbers on the bar.

## Design Philosophy

The entire interface follows _Apple's Human Interface Guidelines_ with strict adherence to accessibility standards. Every interactive element meets _WCAG AA contrast requirements_ (4.5:1 minimum), animations respect reduced motion preferences, and the color system uses a single accent color (green #22c55e) to avoid visual noise.

I've documented the complete design system across multiple files covering components, motion patterns, typography scales, and state handling. This isn't just for show—having these constraints documented has dramatically improved development velocity and consistency.

## Technical Implementation

Built with React 18 and TypeScript for type-safe component development. Vite provides near-instant hot module replacement during development. Tailwind CSS handles styling with custom design tokens that match the documented system.

Supabase powers the backend with PostgreSQL for data storage, Row Level Security for privacy, and real-time subscriptions for instant sync. The authentication flow is email-based with secure session management.

The PWA capabilities allow installation as a native-like app on mobile devices with offline support and push notification potential (planned).

## Current State

This is an ongoing personal project that I actively use for my own training. Features are added based on real-world needs discovered in the gym. The codebase is public on GitHub but optimized for my specific workflow—not yet generalized for broader use.

Next on the roadmap: rest timer improvements, plate calculator refinements, and enhanced exercise library with movement patterns and muscle group tagging.

---
