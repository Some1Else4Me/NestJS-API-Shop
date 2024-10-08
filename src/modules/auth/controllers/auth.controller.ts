import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UtilService } from 'src/modules/common';
import { JwtAuthenticationGuard, Payload } from 'src/modules/common/authentication';
import { NormalResponse } from 'src/modules/share';

import { LoginDto } from '../dtos';
import { AuthService } from '../services';

/**
 * https://docs.nestjs.com/techniques/authentication
 */

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private auth: AuthService,
    private util: UtilService,
  ) {}

  /**
   * See test/e2e/jwt-authentication.spec.ts
   */
  @Post('login')
  public async login(@Body() loginDto: LoginDto): Promise<NormalResponse> {
    return this.auth.login(loginDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @ApiBearerAuth()
  @Get('check')
  public check(@Body() user: Payload): NormalResponse {
    return this.auth.jwtCheck(user);
  }
}
