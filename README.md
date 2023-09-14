# Password Generator
(```pw-generator``` - Module 3 Challenge)

## Description

- The goal of this project was to create a tool using JS that can generate a random password based off the criteria the user selects.
- This was achieved using HTML and CSS "starter code" as provided, and building upon the provided JS, utilising prompts, confirms and alerts for user-interaction requirements. 

## Installation/Usage

1. Visit the deployed tool at: <a href="https://trnigg.github.io/pw-generator/">trnigg.github.io/pw-generator/</a> 
2. Click the red "Generate Password" button to begin.
3. User will be prompted (via pop-up) to define how long the password should be, between 8 and 128 characters (inclusive).
    - if the length-criteria is not met, an alert will inform user and ask them to try again.
    - "Please try again." will be displayed in the text box.
4. User will be taken through a series of 4 "confirm" pop-ups to select which character sets they wish to include.
    - If the user does not select at least one type of character, an alert will inform user and ask them to try again.
    - "Please try again." will be displayed in the text box.
5. The generator will then randomly create a password meeting the stipulated criteria and display it in the textbox.

The image below shows an example in which a user has requested a 10-character password containing lowercase, uppercase and special characters (but no numbers).

![Example of a generated password](./assets/images/Screenshot%202023-09-13%20222357.png)

The user could generate a new password by clicking the button again and completing the steps as listed above.


## Credits

- HTML (with the exception of links to CSS and JS) and CSS are code as provided for coursework. The bottom of JS includes starter code, as commented (albeit with a small change - also commented).

## License

N/A
