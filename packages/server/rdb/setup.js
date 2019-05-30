const r = require('rethinkdb');

const setupDb = async () => {
  const conn = await r.connect();
  const dbs = await r.dbList().run(conn);

  if (dbs.includes('galavanting_gnome_dev')) {
    await r.dbDrop('galavanting_gnome_dev').run(conn);
    console.log('Dropped galavanting_gnome_dev');
  }

  await r.dbCreate('galavanting_gnome_dev').run(conn);
  await r.db('galavanting_gnome_dev').tableCreate('locations').run(conn);

  console.log('Created galavanting_gnome_dev');
  await conn.close();
};

setupDb();
