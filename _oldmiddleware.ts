
 

import {
    clerkMiddleware,
    createRouteMatcher,
    redirectToSignIn,
  } from '@clerk/nextjs/server';
  
  import type { NextApiRequest, NextApiResponse } from "next";
  import Cookies from "cookies";
  import jwt from "jsonwebtoken";
   
  const nextMiddleware = ((req: NextApiRequest, res: NextApiResponse) => {
   let publicKey = process.env.CLERK_PEM_PUBLIC_KEY || "";
    const cookies = new Cookies(req, res);
    let sessToken = cookies.get("__session") || "";
    const token = req.headers.authorization;
   
    if (sessToken === undefined && token === undefined) {
      res.status(401).json({ error: "not signed in" });
      return;
    }
   
    try {
      let decoded;
      if (token) {
        decoded = jwt.verify(token, publicKey);
        res.status(200).json({ sessToken: decoded });
        return;
      } else {
        decoded = jwt.verify(sessToken, publicKey);
        res.status(200).json({ sessToken: decoded });
        return;
      }
    } catch (error) {
      res.status;
      return;
    }
  })
  export default async function (req: NextApiRequest, res: NextApiResponse) {
    let publicKey = process.env.CLERK_PEM_PUBLIC_KEY || "";
    const cookies = new Cookies(req, res);
    let sessToken = cookies.get("__session") || "";
    const token = req.headers.authorization;
   
    if (sessToken === undefined && token === undefined) {
      res.status(401).json({ error: "not signed in" });
      return;
    }
   
    try {
      let decoded;
      if (token) {
        decoded = jwt.verify(token, publicKey);
        res.status(200).json({ sessToken: decoded });
        return;
      } else {
        decoded = jwt.verify(sessToken, publicKey);
        res.status(200).json({ sessToken: decoded });
        return;
      }
    } catch (error) {
      res.status;
      return;
    }
  }
  