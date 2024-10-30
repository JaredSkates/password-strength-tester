# Password Strength Tester

## Styles Folder
- 1 Main Stylesheet and 3 Separate Stylesheets For Each Section

## Scripts Folder
### Features
- **Real-time Password Strength Feedback**: As the user types their password, the strength is evaluated and displayed.
- **Character Count Display**: Shows the current length of the password input.
- **Strength Criteria Evaluation**: Evaluates the password based on:
  - Presence of lowercase letters
  - Presence of uppercase letters
  - Presence of numbers
  - Presence of special symbols
- **Color-Coded Feedback**: Visual cues indicate which password strength criteria are met.

### How It Works

1. The code listens for input events on a password input field.
2. It evaluates the password's length and character content.
3. Based on the criteria, it determines whether the password is "Weak," "Moderate," "Strong," or if no password has been entered.
4. It updates the character count and color codes the criteria indicators based on the user's input.

### Usage

1. Include the script in your HTML file.
2. Create the necessary HTML elements:
   - An input field with the ID `password`.
   - An element to display password strength with the ID `password-strength`.
   - An element to show the character count with the ID `number-counter`.
   - Individual elements for each strength criterion with the IDs: `lowerCase`, `numbers`, `upperCase`, and `symbols`.
