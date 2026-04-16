# PakiShip Frontend

This repository contains the frontend React Native and Expo app for PakiShip.

## Run This Project

If your terminal is already in the repository root, use:

```powershell
cmd /c "npm run install:app"
cmd /c "npm run start"
```

If your terminal opens one folder higher in the outer downloaded folder, use:

```powershell
cd .\pakiship_login_signup-main
cmd /c "npm run install:app"
cmd /c "npm run start"
```

The active app is in `pakiShip_Signup-main`, which includes the authentication flow and sender mobile UI.

The backend has been split into its own repository:

- `https://github.com/riri-9/pakiship_login_signup_be`

The `pakiShip_Login-main` folder is an older standalone login version kept here as a reference. If you want to run the main app, use `pakiShip_Signup-main`.

## Quick Start

If your VS Code terminal opens in the outer downloaded folder, move into the app workspace first:

```powershell
cd .\pakiship_login_signup-main
```

Then run:

```powershell
cmd /c "npm run install:app"
cmd /c "npm run start"
```

If you want tunnel mode instead of the normal local Expo start, run:

```powershell
cmd /c "npm run dev"
```

This repo forwards the root scripts to the active app in `pakiShip_Signup-main`.

If you cloned the repository directly and your terminal is already in the actual repository root, you can skip the extra `cd .\pakiship_login_signup-main` step.

If you prefer to work inside the app folder directly, use:

```powershell
cd pakiShip_Signup-main
cmd /c "npm install --legacy-peer-deps"
cmd /c "npm run start"
```

## Run Modes

Run these from the repository root or from inside `pakiShip_Signup-main`:

- `cmd /c "npm run dev"`: Best for testing on a real phone, especially across different networks.
- `cmd /c "npm run start"`: Best for local LAN or emulator use.
- `cmd /c "npm run android"`: Runs the app on Android if your Android environment is set up.
- `cmd /c "npm run ios"`: Runs the app on iOS if your macOS/iOS environment is set up.

## Development Commands

```powershell
cmd /c "npm run test"
cmd /c "npm run lint"
```

## Notes

- Use Expo Go to scan the QR code after the server starts.
- `--legacy-peer-deps` is recommended for this project because of the current Expo dependency setup.
- The frontend expects a separate backend API URL through `EXPO_PUBLIC_API_BASE_URL`.
- If you only want the merged app in a future cleanup, `pakiShip_Signup-main` is the folder to keep.
- The standalone `pakiShip_Login-main` folder is not the primary app entry point.
