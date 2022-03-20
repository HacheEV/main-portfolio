import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from "nextjs-cors";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  let contact: any;

  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  // Get data submitted in request's body.
  const body = req.body

  // Create contact
  const contactOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      key: process.env.NEXT_PUBLIC_HOLDED_KEY
    },
    body: JSON.stringify({
      tags: ['portfolio'],
      name: body.name,
      email: body.email,
      mobile: body.phone,
      type: 'lead',
      note: body.reason + " - " + body.note,
    })
  };

  console.log('creating contact...');
  // @ts-ignore
  const result = await  fetch('https://api.holded.com/api/invoicing/v1/contacts', contactOptions)
      .then(response => response.json())
      .then(response => (
          contact = response.id,
              console.log("contact created"),
              console.log(response)
      ))
      .catch(err => console.error(err));

  // Create Lead
  const leadOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      key: process.env.NEXT_PUBLIC_HOLDED_KEY
    },
    body: JSON.stringify({
      funnelId: process.env.NEXT_PUBLIC_HOLDED_FUNNEL_KEY,
      contactId: contact,
      contactName: body.name,
      name: body.name
    })
  };
  console.log('creating lead...');
  // @ts-ignore
  const lead = await fetch('https://api.holded.com/api/crm/v1/leads', leadOptions)
      .then(response =>  console.log("Lead created"))
      .catch(err => console.error(err));


  res.status(200).json({ message: "Contact created successfully" })
}
