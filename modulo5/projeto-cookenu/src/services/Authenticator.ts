import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/types";

export class Authenticator {

    public generateToken = (payload: AuthenticationData): string => {

        const token = jwt.sign(
            payload, process.env.JWT_KEY as string, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        );

        return token;
    }

    public getTokenData = (token: string): AuthenticationData | null => {
        try {

            const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;

            return {
                id: data.id,
                email: data.email
            };

        } catch (error) {
            return null;
        }
    }
}