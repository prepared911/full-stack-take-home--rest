# Extra Credit

Wanna keep going? Here's another feature to add!

Keep in mind: You will not get _any extra points_ for doing this, or be _deducted any points_ for not doing this.

You're just providing us with more code to praise you for 😇 ...or blame you for 😈

## Add Chatroom Notes

Users should be able to add timestamped notes to chatrooms

- Create a new model `ChatroomNote`, representing a text note on a `Chatroom`
  - A `Chatroom` can have many `ChatroomNotes`
  - `ChatroomNotes` cannot be edited, but they can be created and deleted
- Show all existing `ChatroomNotes` inside of the `ChatroomDetails` card, displaying:
  - The text content of the note
  - The datetime when the note was created
- Add a "Create Note" button to `ChatroomDetails` that allows users to create chatroom notes
- Add a "Delete Note" button on each note
