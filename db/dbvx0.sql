USE `railway`;

-- CREATE DATABASE  IF NOT EXISTS `dbvx0` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
-- USE `dbvx0`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: dbvx0
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nodes`
--

DROP TABLE IF EXISTS `nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nodes` (
  `node_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'No Name',
  `category` varchar(45) NOT NULL DEFAULT 'Category',
  `type` varchar(45) NOT NULL DEFAULT 'Type',
  `brief` mediumtext,
  `owner_fk` int unsigned NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater_fk` int unsigned DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categories` json DEFAULT NULL,
  `tags` json DEFAULT NULL,
  `aliases` json DEFAULT NULL,
  `data` json DEFAULT NULL,
  `description` mediumtext,
  PRIMARY KEY (`node_id`),
  UNIQUE KEY `id_nodes_UNIQUE` (`node_id`) /*!80000 INVISIBLE */,
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `Node Owner_idx` (`owner_fk`),
  KEY `Updater_idx` (`updater_fk`),
  CONSTRAINT `Node Owner` FOREIGN KEY (`owner_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Updater` FOREIGN KEY (`updater_fk`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nodes`
--

LOCK TABLES `nodes` WRITE;
/*!40000 ALTER TABLE `nodes` DISABLE KEYS */;
INSERT INTO `nodes` VALUES (12,'Node','Category','Type',NULL,14,'2024-07-14 15:52:20',14,'2024-07-14 15:52:20','\"Category\"',NULL,NULL,NULL,NULL),(13,'Node2','Category','Type',NULL,14,'2024-07-14 16:09:04',NULL,'2024-07-14 16:09:04','\"Category\"',NULL,NULL,NULL,NULL),(14,'Node3','Category','Type',NULL,14,'2024-07-14 17:23:42',NULL,'2024-07-14 17:23:42','\"Cat3\"',NULL,NULL,NULL,NULL),(15,'Node for L','Category','Type',NULL,13,'2024-07-14 17:24:53',NULL,'2024-07-14 17:24:53','\"Cat L\"',NULL,NULL,NULL,NULL),(16,'Bananas','Category','Type',NULL,14,'2024-07-15 18:03:38',NULL,'2024-07-15 18:03:38','\"Fruit\"',NULL,NULL,NULL,NULL),(17,'Node Name 1','Category','Type',NULL,14,'2024-07-16 17:12:06',NULL,'2024-07-16 17:12:06','\"Category 1, Category 2\"',NULL,NULL,NULL,NULL),(18,'Node Name 2','Category','Type',NULL,14,'2024-07-16 17:17:49',NULL,'2024-07-16 17:17:49','\"Cat\"',NULL,NULL,NULL,NULL),(19,'Node Name 3','Category','Type',NULL,14,'2024-07-16 17:18:58',NULL,'2024-07-16 17:18:58','\"Cat\"',NULL,NULL,NULL,NULL),(20,'Node Name 4','Category','Type',NULL,14,'2024-07-16 17:25:25',NULL,'2024-07-16 17:25:25','\"Cat\"',NULL,NULL,NULL,NULL),(21,'Node Name 5','Category','Type',NULL,14,'2024-07-16 17:26:25',NULL,'2024-07-16 17:26:25','\"Cat\"',NULL,NULL,NULL,NULL),(22,'Ramen','Category','Type',NULL,14,'2024-07-16 17:34:23',NULL,'2024-07-16 17:34:23','\"Meal\"',NULL,NULL,NULL,NULL),(23,'Menudo','Category','Type',NULL,14,'2024-07-16 18:23:37',NULL,'2024-07-16 18:23:37','\"Meal, Soup\"',NULL,NULL,NULL,NULL),(24,'Insane','Category','Type',NULL,14,'2024-07-17 07:05:27',NULL,'2024-07-17 07:05:27','\"Song\"',NULL,NULL,NULL,NULL),(25,'We Who Are Not As Others','Category','Type',NULL,14,'2024-07-19 21:10:53',NULL,'2024-07-19 21:10:53','\"Song by Sepultura\"',NULL,NULL,NULL,NULL),(27,'We Who Are Not As Others 2','Category','Type',NULL,14,'2024-07-19 21:12:41',NULL,'2024-07-19 21:12:41','\"Song by Sepultura\"',NULL,NULL,NULL,NULL),(28,'Pickup Full of Pink Carnations','Category','Type',NULL,14,'2024-07-19 21:58:33',NULL,'2024-07-19 21:58:33','\"Indie Rock\"',NULL,NULL,NULL,NULL),(29,'Liquid Death SW','Category','Type',NULL,14,'2024-07-22 14:33:57',NULL,'2024-07-22 14:33:57','\"Drink - Sparkling Water\"',NULL,NULL,NULL,NULL),(30,'Liquid Death Mountain Water','Category','Type',NULL,14,'2024-07-23 18:35:32',NULL,'2024-07-23 18:35:32',NULL,NULL,NULL,NULL,NULL),(32,'Liquid Death Mountain Water 2','Category','Type',NULL,14,'2024-07-23 18:37:58',NULL,'2024-07-23 18:37:58',NULL,NULL,NULL,NULL,NULL),(33,'Liquid Death Mountain Water 3','Category','Type',NULL,14,'2024-07-23 18:39:22',NULL,'2024-07-23 18:39:22',NULL,NULL,NULL,NULL,NULL),(34,'Liquid Death Mountain Water 4','Category','Type',NULL,14,'2024-07-23 18:45:12',NULL,'2024-07-23 18:45:12',NULL,NULL,NULL,NULL,NULL),(35,'Liquid Death Mountain Water 5','Category','Type',NULL,14,'2024-07-23 18:45:43',NULL,'2024-07-23 18:45:43',NULL,NULL,NULL,NULL,NULL),(36,'Item Disam 1','Category','Type',NULL,14,'2024-07-23 18:49:14',NULL,'2024-07-23 18:49:14',NULL,NULL,NULL,NULL,NULL),(37,'A D','Category','Type',NULL,14,'2024-07-23 18:50:02',NULL,'2024-07-23 18:50:02',NULL,NULL,NULL,NULL,NULL),(38,'A D1','C','T',NULL,14,'2024-07-23 18:52:29',NULL,'2024-07-23 18:52:29',NULL,NULL,NULL,NULL,NULL),(39,'Eveready Super Heavy Duty AA Batteries','Battery','Super Heavy Duty AA',NULL,14,'2024-07-23 18:54:26',NULL,'2024-07-23 18:54:26',NULL,NULL,NULL,NULL,NULL),(40,'Profile Ball 1.0 Papermate Pen','Writing Tool','Pen',NULL,14,'2024-07-23 18:59:47',NULL,'2024-07-23 18:59:47',NULL,NULL,NULL,NULL,NULL),(41,'Quesadilla Food from Guisados in Hermosa Beach','Category','Type',NULL,14,'2024-07-23 21:22:22',NULL,'2024-07-23 21:22:22',NULL,NULL,NULL,NULL,NULL),(42,'Taco de Chuleta en Chile Verde Food from Guisados in Hermosa Beach','Category','Type',NULL,14,'2024-07-23 21:26:04',NULL,'2024-07-23 21:26:04',NULL,NULL,NULL,NULL,NULL),(43,'Taco de Tinga Guisados - Hermosa Beach','Category','Type',NULL,14,'2024-07-23 22:09:52',NULL,'2024-07-23 22:09:52',NULL,NULL,NULL,NULL,NULL),(44,'PaperMate Profile Ball 1.0 Ballpoint Pens','Category','Type',NULL,14,'2024-07-24 01:08:34',NULL,'2024-07-24 01:08:34',NULL,NULL,NULL,NULL,NULL),(45,'Bill Rosendahl Del Rey Park Parks in Los Angeles','Category','Type',NULL,14,'2024-07-24 01:12:36',NULL,'2024-07-24 01:12:36',NULL,NULL,NULL,NULL,NULL),(46,'Ramen Meals','Category','Type',NULL,14,'2024-07-24 01:16:23',NULL,'2024-07-24 01:16:23',NULL,NULL,NULL,NULL,NULL),(47,'Sharpie Fine Point Permanent Markers','Category','Type',NULL,14,'2024-07-24 04:19:40',NULL,'2024-07-24 04:19:40',NULL,NULL,NULL,NULL,NULL),(48,'Liquid Death Mountain Water Bottled Water','Category','Type',NULL,14,'2024-07-24 04:25:52',NULL,'2024-07-24 04:25:52',NULL,NULL,NULL,NULL,NULL),(49,'Liquid Death Sparkling Water Refreshments','Category','Type',NULL,14,'2024-07-24 05:05:31',NULL,'2024-07-24 05:05:31',NULL,NULL,NULL,NULL,NULL),(50,'Test Item Testing','Category','Type',NULL,14,'2024-07-26 06:01:51',NULL,'2024-07-26 06:01:51',NULL,NULL,NULL,NULL,NULL),(51,'Item Testing 2 Testing','Category','Type',NULL,14,'2024-07-26 06:02:30',NULL,'2024-07-26 06:02:30',NULL,NULL,NULL,NULL,NULL),(52,'Item 3 Testing','Category','Type',NULL,14,'2024-07-26 06:04:41',NULL,'2024-07-26 06:04:41',NULL,NULL,NULL,NULL,NULL),(53,'Milwaukee 48-22-6100 Lineman Pliers','Category','Type',NULL,14,'2024-07-26 06:37:48',NULL,'2024-07-26 06:37:48',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `nodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `review_type` varchar(20) DEFAULT NULL,
  `alias` varchar(255) NOT NULL DEFAULT 'Node',
  `disambiguation` varchar(45) DEFAULT 'Perfect disambiguation',
  `tier` char(1) NOT NULL DEFAULT 'C',
  `category` varchar(45) NOT NULL DEFAULT 'Category',
  `type` varchar(45) NOT NULL DEFAULT 'Type',
  `brief` varchar(255) DEFAULT NULL,
  `user_fk` int unsigned NOT NULL DEFAULT '0',
  `node_fk` int unsigned NOT NULL DEFAULT '0',
  `rubric_fk` int unsigned NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` mediumtext,
  `data` json DEFAULT NULL,
  `score` int DEFAULT '0',
  `categories` json DEFAULT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `review_id_UNIQUE` (`review_id`),
  KEY `Node` (`node_fk`) /*!80000 INVISIBLE */,
  KEY `User_idx` (`user_fk`),
  CONSTRAINT `Node` FOREIGN KEY (`node_fk`) REFERENCES `nodes` (`node_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `User` FOREIGN KEY (`user_fk`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,NULL,'Node Name 5','Perfect disambiguation','C','Category','Type','',14,21,1,'2024-07-16 17:26:25','2024-07-16 17:26:25','',NULL,0,'\"Cat\"','\"#tag1, #tag2\"'),(2,NULL,'Ramen','Perfect disambiguation','C','Category','Type','Noodle soup',14,22,1,'2024-07-16 17:34:23','2024-07-16 17:34:23','One of my favorite soups.',NULL,4,'\"Meal\"','\"#japanese, #food\"'),(3,NULL,'Menudo','Perfect disambiguation','C','Category','Type','Yum!',14,23,1,'2024-07-16 18:23:37','2024-07-16 18:23:37','Longo comment',NULL,4,'\"Meal, Soup\"','\"#mexican\"'),(4,NULL,'Insane','Perfect disambiguation','C','Category','Type','',14,24,1,'2024-07-17 07:05:27','2024-07-17 07:05:27','band: \"Cavalera Conspiracy\", album: \"Psychosis\"',NULL,4,'\"Song\"','\"#heavy-metal\"'),(5,NULL,'We Who Are Not As Others 2','Perfect disambiguation','C','Category','Type','Good',14,27,1,'2024-07-19 21:12:41','2024-07-19 21:12:41','Very good.',NULL,4,'\"Song by Sepultura\"','\"#groove-metal\"'),(6,NULL,'Pickup Full of Pink Carnations','Album by The Vaccines','C','Category','Type','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',14,28,1,'2024-07-19 21:58:33','2024-07-19 21:58:33','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',NULL,4,'\"Indie Rock\"','\"#chill\"'),(7,NULL,'Liquid Death','Sparkling Water','C','Category','Type','Sparkling water in an aluminum can that looks like a beer can decorated in a \"metal\" aesthetic.',14,29,1,'2024-07-22 14:33:57','2024-07-22 14:33:57','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',NULL,4,'\"Drink - Sparkling Water\"','\"#tag1, #tag2\"'),(8,NULL,'Liquid Death','Mountain Water 5','B','Drink','Water','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',14,35,1,'2024-07-23 18:45:43','2024-07-23 18:45:43',NULL,NULL,0,NULL,NULL),(9,NULL,'Item','Disam 1','C','Test','Blue','Brief description.',14,36,1,'2024-07-23 18:49:14','2024-07-23 18:49:14',NULL,NULL,0,NULL,NULL),(10,NULL,'A','D','C','Cat','Type','Brief',14,37,1,'2024-07-23 18:50:02','2024-07-23 18:50:02',NULL,NULL,0,NULL,NULL),(11,NULL,'A','D1','C','C','T','B',14,38,1,'2024-07-23 18:52:29','2024-07-23 18:52:29',NULL,NULL,0,NULL,NULL),(12,NULL,'Eveready','Super Heavy Duty AA Batteries','C','Battery','Super Heavy Duty AA','Brief',14,39,1,'2024-07-23 18:54:26','2024-07-23 18:54:26',NULL,NULL,0,NULL,NULL),(13,NULL,'Profile Ball 1.0','Papermate Pen','C','Writing Tool','Pen','Brief',14,40,1,'2024-07-23 18:59:47','2024-07-23 18:59:47',NULL,NULL,0,NULL,NULL),(14,NULL,'Quesadilla','Food from Guisados in Hermosa Beach','A','Category','Type','',14,41,1,'2024-07-23 21:22:22','2024-07-23 21:22:22',NULL,NULL,0,NULL,NULL),(15,NULL,'Taco de Chuleta en Chile Verde','Food from Guisados in Hermosa Beach','A','Category','Type','',14,42,1,'2024-07-23 21:26:04','2024-07-23 21:26:04',NULL,NULL,0,NULL,NULL),(16,NULL,'Taco de Tinga','Guisados - Hermosa Beach','B','Category','Type','',14,43,1,'2024-07-23 22:09:52','2024-07-23 22:09:52',NULL,NULL,0,NULL,NULL),(17,NULL,'PaperMate Profile Ball 1.0','Ballpoint Pens','C','Category','Type','',14,44,1,'2024-07-24 01:08:34','2024-07-24 01:08:34',NULL,NULL,0,NULL,NULL),(18,NULL,'Bill Rosendahl Del Rey Park','Parks in Los Angeles','C','Category','Type','',14,45,1,'2024-07-24 01:12:36','2024-07-24 01:12:36',NULL,NULL,0,NULL,NULL),(19,NULL,'Ramen','Meals','S','Category','Type','',14,46,1,'2024-07-24 01:16:23','2024-07-24 01:16:23',NULL,NULL,0,NULL,NULL),(20,'Basic','Sharpie Fine Point','Permanent Markers','C','Category','Type','',14,47,1,'2024-07-24 04:19:40','2024-07-24 04:19:40',NULL,NULL,0,NULL,NULL),(21,'Basic','Liquid Death Mountain Water','Bottled Water','B','Category','Type','',14,48,1,'2024-07-24 04:25:52','2024-07-24 04:25:52',NULL,NULL,0,NULL,NULL),(22,'Basic','Liquid Death Sparkling Water 2','Refreshments','S','Bottled Water','Sparkling','',14,49,1,'2024-07-24 05:05:31','2024-07-25 04:13:29','',NULL,0,'\"\"','\"\"'),(26,'Basic','Milwaukee 48-22-6100','Lineman\'s Pliers','S','Category','Type','',14,53,1,'2024-07-26 06:37:48','2024-07-26 06:38:20','',NULL,0,'\"\"','\"\"');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'zero@m.com','password123','johndoe','John Doe','2024-06-28 22:17:35','2024-06-28 22:17:35'),(2,'a@a.com','aaa','aaa','aaa','2024-06-28 22:17:35','2024-06-28 22:17:35'),(4,'b@b.com','bbb','bbb','bbb','2024-06-28 22:17:35','2024-06-28 22:17:35'),(5,'c@c.com','ccc','ccc','ccc','2024-06-29 05:19:07','2024-06-29 05:19:07'),(6,'d@d.com','ddd','ddd','ddd','2024-07-06 01:31:15','2024-07-06 01:31:15'),(7,'e@e.com','eee','eee','eee','2024-07-07 17:51:56','2024-07-07 17:51:56'),(8,'f@f.com','fff','fff','fff','2024-07-07 18:14:13','2024-07-07 18:14:13'),(9,'g@g.com','ggg','ggg','ggg','2024-07-07 21:00:48','2024-07-07 21:00:48'),(10,'h@h.com','$2b$10$rhIKmzR4pfJdlqVhjiZymOv7JmC4tUOMGodcDhV0uJtdK1ISU93zC','h','h','2024-07-08 04:34:36','2024-07-08 04:34:36'),(11,'i@i.com','$2b$10$Qma95W9FNQnT5LhyVgiMN.ZjSgB/Vq.vE87fxyhCdyDJqsrAFfkAy','i','i','2024-07-09 01:00:36','2024-07-09 01:00:36'),(12,'j@j.com','$2b$10$AGTwZ4snKlA22p4iAVoOdesLrw4aEiW0igum8KwGUJNFT8Kwu4fxC','j','j','2024-07-09 04:00:13','2024-07-09 04:00:13'),(13,'l@l.com','$2b$10$Sk1mUYJdUMDi2uv5FoBqDunJW8LKhcXxmpng2vI6IoeMFjMmAu5cq','l','l','2024-07-10 04:11:59','2024-07-10 04:11:59'),(14,'m@m.com','$2b$10$dPPfJ3qHR1OzsiHmbIP5WOJCVTcTkb1hjyeSfx0UIsmRbgpFU8xba','m','m','2024-07-14 14:48:03','2024-07-14 14:48:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'dbvx0'
--

--
-- Dumping routines for database 'dbvx0'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-26 14:32:02
