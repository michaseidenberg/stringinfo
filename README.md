# stringinfo
small app to calculate and represent string flageloets

## Dequarantine an App on macOS (Without Terminal)

When you open an app for the first time on macOS, you may get an error like:

- “\<App\> can’t be opened because it is from an unidentified developer.”
- “\<App\> is damaged and can’t be opened.”

Here’s how to handle this **without** using Terminal.

---

### 1. Use “Open Anyway” in System Settings

1. **Try to open the app once**
   - Double-click the app.
   - Dismiss the error message.

2. **Open System Settings**
   - Click  **Apple menu** → **System Settings…**

3. **Go to Privacy & Security**
   - In the left sidebar, click **Privacy & Security**.

4. **Find the blocked app**
   - Scroll down to the **Security** section.
   - You should see something like:
     - “\<App\> was blocked from use because it is not from an identified developer.”
   - Next to it there will be a button: **Open Anyway**.

5. **Click “Open Anyway”**
   - Confirm in the dialog by clicking **Open**.

6. **Launch normally**
   - From now on, the app should open via normal double-click.

---

### 2. Use Right-Click → Open

If you don’t see **Open Anyway** in System Settings:

1. Locate the app in **Finder** (e.g. **Applications** or **Downloads**).
2. **Right-click** (or **Ctrl-click**) the app icon.
3. Select **Open**.
4. A warning dialog appears again, but this time it has an **Open** button.
5. Click **Open**.
6. After this, double-clicking the app should work normally.

---

### 3. If You See “App is damaged and can’t be opened”

1. **Re-download the app**
   - From the official website, App Store alternative, or trusted source.

2. **Delete the old copy**
   - Remove the app from **Applications** (and empty the Trash, if you like).

3. **Move the new app to Applications**
   - Drag the re-downloaded app into **Applications**.

4. **Allow it**
   - First try **Right-click → Open**.
   - If that fails, use **System Settings → Privacy & Security → Open Anyway**.

---

### 4. Check Gatekeeper Settings (General)

1. Go to **System Settings** → **Privacy & Security**.
2. Under **Security**, find **Allow applications downloaded from:**
   - Choose **App Store and identified developers**.

> This doesn’t “dequarantine” a specific app, but it makes macOS less strict for properly signed apps in the future.
