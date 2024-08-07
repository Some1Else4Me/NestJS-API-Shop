import pluralize from 'pluralize';
import { DefaultNamingStrategy, Table } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class NamingStrategy extends DefaultNamingStrategy {
  public override foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    _referencedTablePath?: string,
    _referencedColumnNames?: string[],
  ): string {
    const table = tableOrName instanceof Table ? tableOrName.name : tableOrName;
    const column = columnNames.length > 1 ? columnNames.join('_') : columnNames[0];
    return `fk_${table}_${column}`;
  }

  public override tableName(targetName: string, userSpecifiedName: string | undefined): string {
    return userSpecifiedName || pluralize(snakeCase(targetName));
  }
}
