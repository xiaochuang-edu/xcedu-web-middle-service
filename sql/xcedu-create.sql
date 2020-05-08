/***************************************************************************
 *
 *  请空数据库
 *
 **************************************************************************/
 DROP TABLE IF EXISTS `EDU_SITE_CONFIG`;
 DROP TABLE IF EXISTS `EDU_USERS`;
 DROP TABLE IF EXISTS `EDU_SITES`;


/***************************************************************************
 *
 * 站点相关信息表
 *
 **************************************************************************/
CREATE TABLE IF NOT EXISTS `EDU_SITES` (
	`ID` VARCHAR(40)  COMMENT 'Site唯一标志ID',
	`SITE_NAME` VARCHAR(40) NOT NULL UNIQUE COMMENT 'Site的名称',
	`FULL_NAME` VARCHAR(100) NOT NULL UNIQUE COMMENT 'Site的全称',
	`ADDRESS` VARCHAR(100) DEFAULT '' COMMENT '公司所在地址',
	`CREATE_TIME` DATETIME NOT NULL,
	`UPDATE_TIME` DATETIME NOT NULL,
	PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


/***************************************************************************
 *
 * 用户信息表 表
 *
 **************************************************************************/
CREATE TABLE IF NOT EXISTS `EDU_USERS` (
  	`ID` VARCHAR(40)  COMMENT '用户唯一标志ID',
	`SITE_ID` VARCHAR(40) COMMENT '该用户说所属站点的id',
	`ACCOUNT` VARCHAR(40) NOT NULL COMMENT '用户账号，唯一， 不可以为空',
	`USER_NAME` VARCHAR(40) NOT NULL COMMENT '用户姓名',
	`PASSWORD` VARCHAR(40) NOT NULL COMMENT '用户密码',
	`USER_ROLE` ENUM('ADMIN', 'TEACHER', 'STUDENT') NOT NULL DEFAULT 'ADMIN',
	`CREATE_TIME` DATETIME NOT NULL, `UPDATE_TIME` DATETIME NOT NULL,
	PRIMARY KEY (`ID`),
	FOREIGN KEY (`SITE_ID`) REFERENCES `EDU_SITES` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `EDU_USERS` ADD UNIQUE INDEX `EDU_USER_INDEXES_SITE_ID_AND_ACCOUNT` (`SITE_ID`, `ACCOUNT`);
/***************************************************************************
 *
 * 站点相关设置表
 *
 **************************************************************************/
CREATE TABLE IF NOT EXISTS `EDU_SITE_CONFIG` (
  	`ID` VARCHAR(40)  COMMENT '站点唯一标志ID',
  	`SITE_ID` VARCHAR(40),
  	`ITEM_NAME` VARCHAR(40) NOT NULL COMMENT 'Site配置项的名称',
  	`ITEM_VALUE` VARCHAR(255) COMMENT '站点配置项的值',
  	`CREATE_TIME` DATETIME NOT NULL,
  	`UPDATE_TIME` DATETIME NOT NULL,
  	PRIMARY KEY (`ID`),
  	FOREIGN KEY (`SITE_ID`) REFERENCES `EDU_SITES` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `EDU_SITE_CONFIG` ADD UNIQUE INDEX `EDU_SITE_CONFIG_INDEXES_SITE_ID_AND_ITEM_NAME` (`SITE_ID`, `ITEM_NAME`);
