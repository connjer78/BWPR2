# Project Cards Power-Up for Trello

## Overview

The Project Cards Power-Up is a custom Trello Power-Up that enhances project management by allowing users to quickly create project cards based on account cards. This Power-Up streamlines the process of setting up project tasks, making it easier for teams to manage projects associated with specific accounts within Trello.

## Features

- Create project cards from an account card with a single click
- Automatically copy card details from the source account card
- Include a link to the source account card in the new project card
- Copy labels from the source account card to the new project card
- Set due dates for the new project card
- Assign multiple members to the new project card

## Workspace Requirements

For the Project Cards Power-Up to function correctly, your Trello workspace must meet the following requirements:

1. A board named "Projects" must exist in the workspace.
2. The "Projects" board must contain a list named "New Projects" where new project cards will be added.

Ensure these requirements are met before using the Power-Up to create project cards.

## How It Works

1. The Power-Up adds a "Create Project" button to Trello account cards.
2. Clicking the button opens a popup where users can:
   - Set a due date for the project card
   - Choose multiple members to assign to the project card
   - Add any additional details or modifications
3. The Power-Up then:
   - Creates a new card in the "New Projects" list of the "Projects" board
   - Copies the labels from the source account card
   - Applies the selected due date and member assignments
   - Adds a link back to the source account card on the new project card

## Recent Improvements

- Implemented a vertical layout for better space utilization in the popup
- Added a custom multi-select dropdown for member selection, allowing multiple members to be assigned while saving space
- Updated the UI to use Trello's official style guide and Atlassian Design Tokens for better visual integration and theme support
- Improved error handling and user feedback

## Usage

1. Navigate to an account card in your Trello board
2. Click the "Create Project" button that appears on the card
3. In the popup, set a due date for the project (optional)
4. Choose members to assign to the project card (optional)
5. Add any additional details or modifications
6. Click "Create Project Card" to generate the new card

## Development

This Power-Up is built using HTML, CSS, and JavaScript, leveraging the Trello Power-Up API. It uses Trello's official CSS for styling and Atlassian Design Tokens for theme compatibility.

### Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with your Trello API key and token
4. Run the development server with `npm start`

### Building

To create a production build, run `npm run build`. This will generate optimized files in the `dist` directory.

## Customization

The Power-Up can be customized to fit specific workflow needs. Some possible customizations include:

- Adding custom fields to the project card creation process
- Implementing automatic naming conventions for new project cards
- Creating multiple project cards based on predefined templates

To customize the Power-Up, modify the relevant JavaScript files in the `src` directory.

## Troubleshooting

If you encounter issues while using the Project Cards Power-Up, try the following:

## Author

Jeremy Conner
