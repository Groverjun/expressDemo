/*
 Navicat Premium Data Transfer

 Source Server         : node
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3308
 Source Schema         : nodetest

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 07/12/2018 17:24:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for markdown
-- ----------------------------
DROP TABLE IF EXISTS `markdown`;
CREATE TABLE `markdown`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT 'Markdown',
  `html` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
