/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';

/*!
 * Components
 */

import Layout from '../components/layout';

/*!
 * Expo
 */

const Organization = ({ categories, organizations, settings }) => (
  <Layout>
  </Layout>
);

Organization.getInitialProps = async (props) => {
  console.info(props);
  const [categoriesRes, organizationsRes, settingsRes] = await Promise.all([
    axios.get('http://localhost:8081/categories'),
    axios.get('http://localhost:8081/organizations'),
    axios.get('http://localhost:8081/settings'),
  ]);

  const settings = {};

  if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
    settingsRes.data.forEach(({ value, slug }) => settings[slug] = value);
  }

  return {
    settings,
    categories: categoriesRes.data,
    organizations: organizationsRes.data,
  };
};

export default Organization;
