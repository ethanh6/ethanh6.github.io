import { Client } from '@notionhq/client';
import { getEnvironmentVariable } from '../index';

const NOTION_KEY = getEnvironmentVariable('NOTION_KEY');

// instantiate the notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// define a function to get blogs
export const getNotes = async () =>
  await notion.databases.query({
    database_id: `${process.env.NOTION_NOTE_DATABASE_ID}`,
    page_size: 10000,
  });

// define a function to get blogs
export const getBlogs = async () =>
  await notion.databases.query({
    database_id: `{process.env.NOTION_BLOG_DATABASE_ID}`,
    page_size: 10000,
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });

export const getBookmarks = async () => {
  await notion.databases.query({
    database_id: process.env.NOTION_BOOKMARKS_ID!,
    page_size: 10000,
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });
};

const getPageInJSON = async (pageID: string) => {
  return await fetch('https://api.notion.com/v1/pages/' + pageID, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      Authorization: 'Bearer ' + NOTION_KEY,
    },
  }).then((res) => res.json());
};
