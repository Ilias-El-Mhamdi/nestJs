import {Controller, Post} from "@nestjs/common";

@Controller('')
export class AuthController {
    constructor() {
    }

    @Post("signup")
    signup(): boolean {
        return true;
    }

}
