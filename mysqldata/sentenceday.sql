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

 Date: 07/12/2018 17:27:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sentenceday
-- ----------------------------
DROP TABLE IF EXISTS `sentenceday`;
CREATE TABLE `sentenceday`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT '每日一句',
  `time` datetime(6) NULL DEFAULT NULL,
  `sentence` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
