TRUNCATE `EDU_USERS`;
INSERT INTO `EDU_USERS` (`ID`, `USER_NAME`, `PASSWORD`, `USER_ROLE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('dd3a70e928414a399096ebf10b45a15d', 'chejian2', md5('P@ss1234'), 'ADMIN', now(), now());
INSERT INTO `EDU_USERS` (`ID`, `USER_NAME`, `PASSWORD`, `USER_ROLE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('082eeb2e792a414da3309e9a51aa208c', 'xuanhui', md5('P@ss1234'), 'ADMIN', now(), now());

/* ------------------------------------------------------------------------------------*
 *
 *  								关联表开始
 *
 *------------------------------------------------------------------------------------ */


START TRANSACTION;

DELETE FROM EDU_SITE_CONFIG
    USING EDU_SITE_CONFIG, EDU_SITES
    WHERE `EDU_SITES`.`ID` = `EDU_SITE_CONFIG`.`SITE_ID`
          AND EDU_SITES.ID IN ('cd7528ac804a407383baa980d67248f2', '45f3cad57266437e9dd0344ab3c21a46');
DELETE FROM EDU_SITES
    USING EDU_SITES
    WHERE EDU_SITES.ID  IN ('cd7528ac804a407383baa980d67248f2', '45f3cad57266437e9dd0344ab3c21a46');
COMMIT;




INSERT INTO `EDU_SITES` (`ID`, `SITE_NAME`, `FULL_NAME`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('cd7528ac804a407383baa980d67248f2', 'mukun', '沐坤科技有限公司', now(), now());
INSERT INTO `EDU_SITES` (`ID`, `SITE_NAME`, `FULL_NAME`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('45f3cad57266437e9dd0344ab3c21a46', 'gtyz', '广州市铁一中学', now(), now());

INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('8b6844f5fc1b4c1cbac1b0e04fe446db', 'cd7528ac804a407383baa980d67248f2', 'ICO_PATH', 'http://mukun.xiaochuang.edu.cn/cd7528ac804a407383baa980d67248f2/logo/dc4f0719657a415d8b4e115fbff89976.ico', now(), now());
INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('19902d6e165c412299188300175f029e', 'cd7528ac804a407383baa980d67248f2', 'LOGO_PATH', 'http://mukun.xiaochuang.edu.cn/cd7528ac804a407383baa980d67248f2/logo/f0f730c154834a42b106f82de656dd7f.jpg', now(), now());
INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('2aed805d075f437bb77a4c8b6a92e11f', 'cd7528ac804a407383baa980d67248f2', 'COPYRIGHT', '沐坤集团©2019 All Rights Reserved.', now(), now());
INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('0332327b05464177a10b811b0ebcd514', 'cd7528ac804a407383baa980d67248f2', 'COMPANY_NAME', '沐坤科技', now(), now());

INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('4e8d28c5c10c4e178e611d4a891925ff', '45f3cad57266437e9dd0344ab3c21a46', 'ICO_PATH', 'http://mukun.xiaochuang.edu.cn/45f3cad57266437e9dd0344ab3c21a46/logo/5f960aacaf734bfc922bc698ed8f6d51.ico', now(), now());
INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('73d2c31467cf48aeb45a2a244667a7df', '45f3cad57266437e9dd0344ab3c21a46', 'LOGO_PATH', 'http://mukun.xiaochuang.edu.cn/45f3cad57266437e9dd0344ab3c21a46/logo/5133df56aaed4e59986c03cab15e6316.jpg', now(), now());
INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('1bf20efdb79347d483fb3a171d920e83', '45f3cad57266437e9dd0344ab3c21a46', 'COPYRIGHT', '沐坤集团©2019 All Rights Reserved.', now(), now());
INSERT INTO `EDU_SITE_CONFIG` (`ID`, `SITE_ID`, `ITEM_NAME`, `ITEM_VALUE`, `CREATE_TIME`, `UPDATE_TIME`) VALUES ('a26ca3764bca47ab90b199b7cb4e9420', '45f3cad57266437e9dd0344ab3c21a46', 'COMPANY_NAME', '广州市铁一中学', now(), now());

/* ------------------------------------------------------------------------------------*
 *
 *  								关联表结束
 *
 *------------------------------------------------------------------------------------ */
