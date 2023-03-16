import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.MY_NOTION_TOKEN })

export default async function (req, res) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.DATABASE_ID },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: `${req.body.email}`,
              },
            },
          ],
        }
      },
    })
    console.log(response)
  } catch (err) {
    console.error('Error', err)
  }

  res.status(200).json({ status: 'success' })
}
