import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export class Authenticator {

    public generateToken = (payload: AuthenticationData): string => {
      
      const token = jwt.sign( 
        payload,
        process.env.JWT_KEY as string,
        { expiresIn: "1min" }
      );

      return token;
    }

    public getTokenData = (token: string): AuthenticationData | null => {
      try {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        
        return data
      } catch (error) {
        return null
      }
  }
}
