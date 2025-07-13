require("dotenv").config();
const { startBot } = require("./src/client/handler");
module.exports = async function loadEvents({ conn, ev }) {
  const CallEvents = require("./CallEvents");
  const conectionUpdate = require("../src/events/conectionUpdate");
  const GoupUpdate = require("../src/events/GoupUpdate");
  const messageeDelete = require("../src/events/messageeDelete");
  const Messagereaccion = require("../src/events/Messagereaccion");
  const ParticipantUpdate = require("../src/events/ParticipantUpdate");

  await CallEvents({ conn, ev });
  await conectionUpdate({ conn, ev });
  await GoupUpdate({ conn, ev });
  await messageeDelete({ conn, ev });
  await Messagereaccion({ conn, ev });
  await ParticipantUpdate({ conn, ev });
};
startBot();
