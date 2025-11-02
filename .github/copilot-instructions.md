# AI Assistant Instructions for Portfolio Project

## Project Overview
This is a cross-platform portfolio application built with React Native and Expo Router, designed to work on iOS, Android, and Web platforms. The project uses TypeScript for type safety and follows a file-based routing architecture.

## Key Architecture Patterns

### Routing & Navigation
- File-based routing using Expo Router in `/app` directory
- Tab navigation configured in `/app/(tabs)/_layout.tsx`
- Modal screens defined at root level (e.g., `/app/modal.tsx`)
- 404 handling via `/app/+not-found.tsx`

### Styling & Theme
- Constants-based theming in `/constants/`
  - Colors defined in `colors.ts`
  - Typography system in `fonts.ts`
- Cross-platform styles using React Native StyleSheet
- Icons from `lucide-react-native` and `@expo/vector-icons`

### Data Management
- React Query for server state management
- AsyncStorage for local data persistence
- Form handling with Formspree integration

## Development Workflow

### Setup & Installation
```bash
bun i  # Install dependencies
bun run start  # Start development server
bun run web  # Start web development server
```

### Testing
- Test on real devices using Expo Go app
- Web testing with `bun start-web`
- iOS Simulator/Android Emulator support

### Building
```bash
bun run build  # Build for web
eas build --platform ios  # Build for iOS
eas build --platform android  # Build for Android
```

## Project-Specific Conventions

### File Structure
- `/app`: All screens and navigation
- `/assets`: Static files (images, fonts)
- `/constants`: Shared configuration
- Route-based file naming (e.g., `+not-found.tsx` for 404)

### Code Patterns
- Screen components default export from route files
- StyleSheet definitions at bottom of files
- Color constants from `Colors` object
- Font styles from `Fonts` object

## Common Development Tasks

### Adding a New Screen
1. Create file in `/app` using Expo Router conventions
2. Export default component
3. Add to navigation if needed
4. Import and use shared constants

### Styling Guidelines
- Use `StyleSheet.create()` for styles
- Reference colors from `Colors` constant
- Follow typography system from `Fonts`
- Consider responsive design with platform checks

### Form Integration
- Follow Formspree setup in `SETUP.md`
- Update form endpoint ID in component
- Handle loading/error states

## Critical Dependencies
- expo ~49.0.0
- expo-router ~2.0.0
- react-native 0.72.10
- typescript ^5.1.0
- @tanstack/react-query ^4.36.0

## Third-Party Integrations
- Formspree for contact forms
- Google Analytics for tracking
- Expo's development and build services