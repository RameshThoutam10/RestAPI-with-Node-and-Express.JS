import {
  addnewContact,
  getContacts,
  getContactWithId,
  updateContact,
  deleteContact
} from "../controllers/crmController";

const routes = app => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    //POST endpoint
    .post(addnewContact);

  app
    .route("/contact/:contactID")
    //GET specific contact
    .get(getContactWithId)
    //Update specific contact
    .put(updateContact)
    //deleting a specific contact
    .delete(deleteContact);
};

export default routes;
