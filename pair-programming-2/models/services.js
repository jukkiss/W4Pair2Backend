const Service = require('./servicesModel');
const connectDB = require('./db');

connectDB();

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-wallet',
    title: 'Saving Money',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-car',
    title: 'Car Repair',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-home',
    title: 'Home Cleaning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 4,
    icon: 'fas fa-plug',
    title: 'Electrical Services',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 5,
    icon: 'fas fa-paint-brush',
    title: 'Painting Services',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.',
  },
];

const importData = async () => {
  try {
    await Service.create(servicesData);
    console.log('Data imported successfully');
  } catch (error) {
    console.error('Error importing data:', error.message);
  }
};

const clearData = async () => {
  try {
    await Service.deleteMany();
    console.log('Data cleared successfully');
  } catch (error) {
    console.error('Error clearing data:', error.message);
  }
};

module.exports = { importData, clearData };
