import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  @HttpCode(200)
  findAll(@Param('id') id: number): string {
    return `cats ${id}`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
