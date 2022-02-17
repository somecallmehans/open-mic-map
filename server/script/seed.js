const {
  db,
  models: { Events, EventType, Locations },
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

  //console.log(Object.keys(Events.__proto__));
  await Events.create(
    {
      title: "Open mic 1",
      over21: true,
      recurring: false,
      rateOfRecurrence: "Weekly",
      dayOfTheWeek: "Thursday",
      location: {
        address: "343 Stratford Avenue",
        city: "Pittsburgh",
        state: "Pennsylvania",
      },
      eventtypeId: 2,
    },
    {
      include: Locations,
    }
  );
  await Events.create(
    {
      title: "Open mic 2",
      over21: true,
      recurring: true,
      rateOfRecurrence: "Monthly",
      dayOfTheWeek: "Friday",
      location: {
        address: "254 37th Street",
        city: "Pittsburgh",
        state: "Pennsylvania",
      },
      eventtypeId: 1,
    },
    {
      include: Locations,
    }
  );
  await Events.create(
    {
      title: "Open mic 3",
      over21: false,
      recurring: true,
      rateOfRecurrence: "Weekly",
      dayOfTheWeek: "Wednesday",
      location: {
        address: "2821 Penn Avenue",
        city: "Pittsburgh",
        state: "Pennsylvania",
      },
      eventtypeId: 3,
    },
    {
      include: Locations,
    }
  );
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
