# shopping-list-api
Part 1 - adding a DELETE endpoint

To complete this section of the assignment you should create a DELETE endpoint for /items/<id>. For example, visiting /items/3 would delete the item with ID 3.

Requirements

    If successful, your endpoint should return the deleted item, with the appropriate status code.
    If an incorrect ID is supplied, your endpoint should fail gracefully, returning a JSON error message.

Part 2 - adding a PUT endpoint

To complete this section of the assignment you should create a PUT endpoint for /items/<id>. For example, sending the JSON object {"name": "Durian", "id": 3} to /items/3 should set the item with ID 3 to be a Durian.

Requirements

    If successful, your endpoint should return the edited, with the appropriate status code.
    If a non-existent ID is supplied, your endpoint should create a new item using the ID supplied.

