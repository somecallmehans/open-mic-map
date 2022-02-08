const {
  db,
  models: { Events, EventType, Links, Locations },
} = require("../db");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  //Add seed events functions etc

  await EventType.create({
    name: "comedy",
  });
  await EventType.create({
    name: "music",
  });
  await EventType.create({
    name: "all performances",
  });
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
