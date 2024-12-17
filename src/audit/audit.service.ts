import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/Users';
import { UserService } from 'src/user/user.service';
import { Audits } from 'src/entities/Audits';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Audits)
    private readonly auditRepository: Repository<Audits>,
    private readonly userService: UserService,
  ) {}

  async logChange(
    action: string | null,
    tableName: string,
    recordId: number | null,
    oldData: object | null,
    newData: object | null,
    changedBy: number | null,
  ): Promise<Audits> {
    const user: Users = changedBy
      ? await this.userService.findOneById(changedBy)
      : null;

    const audit = this.auditRepository.create({
      action,
      tableName,
      recordId,
      oldData,
      newData,
      changedBy: user,
    });

    return this.auditRepository.save(audit);
  }
}
