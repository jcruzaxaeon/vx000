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
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nodes`
--

LOCK TABLES `nodes` WRITE;
/*!40000 ALTER TABLE `nodes` DISABLE KEYS */;
INSERT INTO `nodes` VALUES (12,'Node','Category','Type',NULL,14,'2024-07-14 15:52:20',14,'2024-07-14 15:52:20','\"Category\"',NULL,NULL,NULL,NULL),(13,'Node2','Category','Type',NULL,14,'2024-07-14 16:09:04',NULL,'2024-07-14 16:09:04','\"Category\"',NULL,NULL,NULL,NULL),(14,'Node3','Category','Type',NULL,14,'2024-07-14 17:23:42',NULL,'2024-07-14 17:23:42','\"Cat3\"',NULL,NULL,NULL,NULL),(15,'Node for L','Category','Type',NULL,13,'2024-07-14 17:24:53',NULL,'2024-07-14 17:24:53','\"Cat L\"',NULL,NULL,NULL,NULL),(16,'Bananas','Category','Type',NULL,14,'2024-07-15 18:03:38',NULL,'2024-07-15 18:03:38','\"Fruit\"',NULL,NULL,NULL,NULL),(17,'Node Name 1','Category','Type',NULL,14,'2024-07-16 17:12:06',NULL,'2024-07-16 17:12:06','\"Category 1, Category 2\"',NULL,NULL,NULL,NULL),(18,'Node Name 2','Category','Type',NULL,14,'2024-07-16 17:17:49',NULL,'2024-07-16 17:17:49','\"Cat\"',NULL,NULL,NULL,NULL),(19,'Node Name 3','Category','Type',NULL,14,'2024-07-16 17:18:58',NULL,'2024-07-16 17:18:58','\"Cat\"',NULL,NULL,NULL,NULL),(20,'Node Name 4','Category','Type',NULL,14,'2024-07-16 17:25:25',NULL,'2024-07-16 17:25:25','\"Cat\"',NULL,NULL,NULL,NULL),(21,'Node Name 5','Category','Type',NULL,14,'2024-07-16 17:26:25',NULL,'2024-07-16 17:26:25','\"Cat\"',NULL,NULL,NULL,NULL),(22,'Ramen','Category','Type',NULL,14,'2024-07-16 17:34:23',NULL,'2024-07-16 17:34:23','\"Meal\"',NULL,NULL,NULL,NULL),(23,'Menudo','Category','Type',NULL,14,'2024-07-16 18:23:37',NULL,'2024-07-16 18:23:37','\"Meal, Soup\"',NULL,NULL,NULL,NULL),(24,'Insane','Category','Type',NULL,14,'2024-07-17 07:05:27',NULL,'2024-07-17 07:05:27','\"Song\"',NULL,NULL,NULL,NULL),(25,'We Who Are Not As Others','Category','Type',NULL,14,'2024-07-19 21:10:53',NULL,'2024-07-19 21:10:53','\"Song by Sepultura\"',NULL,NULL,NULL,NULL),(27,'We Who Are Not As Others 2','Category','Type',NULL,14,'2024-07-19 21:12:41',NULL,'2024-07-19 21:12:41','\"Song by Sepultura\"',NULL,NULL,NULL,NULL),(28,'Pickup Full of Pink Carnations','Category','Type',NULL,14,'2024-07-19 21:58:33',NULL,'2024-07-19 21:58:33','\"Indie Rock\"',NULL,NULL,NULL,NULL),(29,'Liquid Death SW','Category','Type',NULL,14,'2024-07-22 14:33:57',NULL,'2024-07-22 14:33:57','\"Drink - Sparkling Water\"',NULL,NULL,NULL,NULL),(30,'Liquid Death Mountain Water','Category','Type',NULL,14,'2024-07-23 18:35:32',NULL,'2024-07-23 18:35:32',NULL,NULL,NULL,NULL,NULL),(32,'Liquid Death Mountain Water 2','Category','Type',NULL,14,'2024-07-23 18:37:58',NULL,'2024-07-23 18:37:58',NULL,NULL,NULL,NULL,NULL),(33,'Liquid Death Mountain Water 3','Category','Type',NULL,14,'2024-07-23 18:39:22',NULL,'2024-07-23 18:39:22',NULL,NULL,NULL,NULL,NULL),(34,'Liquid Death Mountain Water 4','Category','Type',NULL,14,'2024-07-23 18:45:12',NULL,'2024-07-23 18:45:12',NULL,NULL,NULL,NULL,NULL),(35,'Liquid Death Mountain Water 5','Category','Type',NULL,14,'2024-07-23 18:45:43',NULL,'2024-07-23 18:45:43',NULL,NULL,NULL,NULL,NULL),(36,'Item Disam 1','Category','Type',NULL,14,'2024-07-23 18:49:14',NULL,'2024-07-23 18:49:14',NULL,NULL,NULL,NULL,NULL),(37,'A D','Category','Type',NULL,14,'2024-07-23 18:50:02',NULL,'2024-07-23 18:50:02',NULL,NULL,NULL,NULL,NULL),(38,'A D1','C','T',NULL,14,'2024-07-23 18:52:29',NULL,'2024-07-23 18:52:29',NULL,NULL,NULL,NULL,NULL),(39,'Eveready Super Heavy Duty AA Batteries','Battery','Super Heavy Duty AA',NULL,14,'2024-07-23 18:54:26',NULL,'2024-07-23 18:54:26',NULL,NULL,NULL,NULL,NULL),(40,'Profile Ball 1.0 Papermate Pen','Writing Tool','Pen',NULL,14,'2024-07-23 18:59:47',NULL,'2024-07-23 18:59:47',NULL,NULL,NULL,NULL,NULL),(41,'Quesadilla Food from Guisados in Hermosa Beach','Category','Type',NULL,14,'2024-07-23 21:22:22',NULL,'2024-07-23 21:22:22',NULL,NULL,NULL,NULL,NULL),(42,'Taco de Chuleta en Chile Verde Food from Guisados in Hermosa Beach','Category','Type',NULL,14,'2024-07-23 21:26:04',NULL,'2024-07-23 21:26:04',NULL,NULL,NULL,NULL,NULL),(43,'Taco de Tinga Guisados - Hermosa Beach','Category','Type',NULL,14,'2024-07-23 22:09:52',NULL,'2024-07-23 22:09:52',NULL,NULL,NULL,NULL,NULL),(44,'PaperMate Profile Ball 1.0 Ballpoint Pens','Category','Type',NULL,14,'2024-07-24 01:08:34',NULL,'2024-07-24 01:08:34',NULL,NULL,NULL,NULL,NULL),(45,'Bill Rosendahl Del Rey Park Parks in Los Angeles','Category','Type',NULL,14,'2024-07-24 01:12:36',NULL,'2024-07-24 01:12:36',NULL,NULL,NULL,NULL,NULL),(46,'Ramen Meals','Category','Type',NULL,14,'2024-07-24 01:16:23',NULL,'2024-07-24 01:16:23',NULL,NULL,NULL,NULL,NULL),(47,'Sharpie Fine Point Permanent Markers','Category','Type',NULL,14,'2024-07-24 04:19:40',NULL,'2024-07-24 04:19:40',NULL,NULL,NULL,NULL,NULL),(48,'Liquid Death Mountain Water Bottled Water','Category','Type',NULL,14,'2024-07-24 04:25:52',NULL,'2024-07-24 04:25:52',NULL,NULL,NULL,NULL,NULL),(49,'Liquid Death Sparkling Water Refreshments','Category','Type',NULL,14,'2024-07-24 05:05:31',NULL,'2024-07-24 05:05:31',NULL,NULL,NULL,NULL,NULL),(50,'Test Item Testing','Category','Type',NULL,14,'2024-07-26 06:01:51',NULL,'2024-07-26 06:01:51',NULL,NULL,NULL,NULL,NULL),(51,'Item Testing 2 Testing','Category','Type',NULL,14,'2024-07-26 06:02:30',NULL,'2024-07-26 06:02:30',NULL,NULL,NULL,NULL,NULL),(52,'Item 3 Testing','Category','Type',NULL,14,'2024-07-26 06:04:41',NULL,'2024-07-26 06:04:41',NULL,NULL,NULL,NULL,NULL),(53,'Milwaukee 48-22-6100 Lineman Pliers','Category','Type',NULL,14,'2024-07-26 06:37:48',NULL,'2024-07-26 06:37:48',NULL,NULL,NULL,NULL,NULL),(54,'Mint 3 Tea','Category','Type',NULL,14,'2024-07-26 21:50:29',NULL,'2024-07-26 21:50:29',NULL,NULL,NULL,NULL,NULL),(55,'Test 6 Testing','Category','Type',NULL,14,'2024-07-26 21:53:35',NULL,'2024-07-26 21:53:35',NULL,NULL,NULL,NULL,NULL),(56,'T5 T','Category','Type',NULL,14,'2024-07-26 22:04:33',NULL,'2024-07-26 22:04:33',NULL,NULL,NULL,NULL,NULL),(57,'T6 T','Category','Type',NULL,14,'2024-07-26 22:05:32',NULL,'2024-07-26 22:05:32',NULL,NULL,NULL,NULL,NULL),(58,'T1 TT','Category','Type',NULL,14,'2024-07-30 22:06:07',NULL,'2024-07-30 22:06:07',NULL,NULL,NULL,NULL,NULL),(59,'T1 List Name T1','Category','Type',NULL,14,'2024-07-31 01:52:27',NULL,'2024-07-31 01:52:27',NULL,NULL,NULL,NULL,NULL),(60,'T2 List Name T2','Category','Type',NULL,10,'2024-07-31 02:00:02',NULL,'2024-07-31 02:00:02',NULL,NULL,NULL,NULL,NULL),(61,'Sometimes, I Swear Songs from Pickup Full of Pink Carnations','Category','Type',NULL,14,'2024-08-01 06:15:33',NULL,'2024-08-01 06:15:33',NULL,NULL,NULL,NULL,NULL),(62,'Heartbreak Kid Songs from Pickup Full of Pink Carnations','Category','Type',NULL,14,'2024-08-01 06:15:51',NULL,'2024-08-01 06:15:51',NULL,NULL,NULL,NULL,NULL),(63,'Lunar Eclipse Songs from Pickup Full of Pink Carnations','Category','Type',NULL,14,'2024-08-01 06:16:31',NULL,'2024-08-01 06:16:31',NULL,NULL,NULL,NULL,NULL),(64,'Love to Walk Away Songs from Pickup Full of Pink Carnations','Category','Type',NULL,19,'2024-08-01 06:37:18',NULL,'2024-08-01 06:37:18',NULL,NULL,NULL,NULL,NULL),(65,'Sferro Songs on Ornaments album by Sferro','Category','Type',NULL,19,'2024-08-01 06:54:26',NULL,'2024-08-01 06:54:26',NULL,NULL,NULL,NULL,NULL),(66,'Rhinoceros on Gish by Smashing Pumpkins Songs','Category','Type',NULL,19,'2024-08-01 06:59:40',NULL,'2024-08-01 06:59:40',NULL,NULL,NULL,NULL,NULL),(67,'Civil Engineer by Astronauts Indie Rock Songs','Category','Type',NULL,19,'2024-08-02 06:20:20',NULL,'2024-08-02 06:20:20',NULL,NULL,NULL,NULL,NULL),(68,'No Rain by Blind Melon Alternative Rock Songs','Category','Type',NULL,19,'2024-08-02 06:26:45',NULL,'2024-08-02 06:26:45',NULL,NULL,NULL,NULL,NULL),(69,'Talking Backwards by Real Estate Indie Rock Songs','Category','Type',NULL,19,'2024-08-02 06:31:06',NULL,'2024-08-02 06:31:06',NULL,NULL,NULL,NULL,NULL),(70,'Never Far Classical Music','Category','Type',NULL,19,'2024-08-05 21:21:13',NULL,'2024-08-05 21:21:13',NULL,NULL,NULL,NULL,NULL),(71,'False God by Paul Harris Best Songs','Category','Type',NULL,19,'2024-08-05 21:51:52',NULL,'2024-08-05 21:51:52',NULL,NULL,NULL,NULL,NULL),(72,'Greetings from El Segundo (Beers: Los Angeles)','Category','Type',NULL,19,'2024-08-08 06:02:51',NULL,'2024-08-08 06:02:51',NULL,NULL,NULL,NULL,NULL),(73,'Test Item (Test List)','Category','Type',NULL,19,'2024-08-08 06:06:14',NULL,'2024-08-08 06:06:14',NULL,NULL,NULL,NULL,NULL),(75,'Greetings from El Segundo (Beers: Los Angeles II)','Category','Type',NULL,19,'2024-08-08 06:12:18',NULL,'2024-08-08 06:12:18',NULL,NULL,NULL,NULL,NULL),(76,'Cumbia Sobre el Mar (Son del Eje)','Category','Type',NULL,19,'2024-08-08 06:45:53',NULL,'2024-08-08 06:45:53',NULL,NULL,NULL,NULL,NULL),(77,'Willy\'s Merengue (Son del Eje)','Category','Type',NULL,19,'2024-08-08 06:46:36',NULL,'2024-08-08 06:46:36',NULL,NULL,NULL,NULL,NULL),(78,'Gnosis (Instrumental Metal)','Category','Type',NULL,19,'2024-08-08 08:02:19',NULL,'2024-08-08 08:02:19',NULL,NULL,NULL,NULL,NULL),(79,'The Distance (90s Alternative Rock)','Category','Type',NULL,19,'2024-08-08 08:11:55',NULL,'2024-08-08 08:11:55',NULL,NULL,NULL,NULL,NULL),(80,'In the Meantime (90s Alternative Rock)','Category','Type',NULL,19,'2024-08-08 08:13:24',NULL,'2024-08-08 08:13:24',NULL,NULL,NULL,NULL,NULL),(81,'No Rain (90s Alternative Rock)','Category','Type',NULL,19,'2024-08-08 08:16:13',NULL,'2024-08-08 08:16:13',NULL,NULL,NULL,NULL,NULL),(82,'SEXY DANCE (Alternative Dance Playlist)','Category','Type',NULL,19,'2024-08-08 08:22:36',NULL,'2024-08-08 08:22:36',NULL,NULL,NULL,NULL,NULL),(83,'Cuatro Velas (Mexican Playlist)','Category','Type',NULL,19,'2024-08-08 08:33:43',NULL,'2024-08-08 08:33:43',NULL,NULL,NULL,NULL,NULL),(84,'Hadsel (Indie Music)','Category','Type',NULL,19,'2024-08-11 05:41:01',NULL,'2024-08-11 05:41:01',NULL,NULL,NULL,NULL,NULL),(85,'So Many Plans (Indie Music)','Category','Type',NULL,19,'2024-08-11 05:55:27',NULL,'2024-08-11 05:55:27',NULL,NULL,NULL,NULL,NULL),(86,'Stokmarknes (Indie Music)','Category','Type',NULL,19,'2024-08-11 05:59:53',NULL,'2024-08-11 05:59:53',NULL,NULL,NULL,NULL,NULL),(87,'January 18th (Indie Music)','Category','Type',NULL,19,'2024-08-11 06:07:45',NULL,'2024-08-11 06:07:45',NULL,NULL,NULL,NULL,NULL),(88,'A Candle\'s Fire (Indie Music)','Category','Type',NULL,19,'2024-08-11 06:13:14',NULL,'2024-08-11 06:13:14',NULL,NULL,NULL,NULL,NULL),(89,'Santa Fe (Indie Music)','Category','Type',NULL,19,'2024-08-11 06:14:11',NULL,'2024-08-11 06:14:11',NULL,NULL,NULL,NULL,NULL);
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
  `review_type` enum('basic','standard','full') DEFAULT 'basic',
  `tierlist` varchar(45) DEFAULT 'List Name',
  `item` varchar(45) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `tier` enum('S','A','B','C','D','E','F') NOT NULL DEFAULT 'C',
  `visibility` enum('private','shared','public') NOT NULL DEFAULT 'private',
  `alias` varchar(255) NOT NULL DEFAULT 'Node',
  `disambiguation` varchar(45) DEFAULT 'Perfect disambiguation',
  `category` varchar(45) NOT NULL DEFAULT 'Category',
  `type` varchar(45) NOT NULL DEFAULT 'Type',
  `user_fk` int unsigned NOT NULL DEFAULT '0',
  `node_fk` int unsigned NOT NULL DEFAULT '0',
  `rubric_fk` int unsigned NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` mediumtext,
  `data` json DEFAULT NULL,
  `score` int DEFAULT '0',
  `brief` varchar(255) DEFAULT NULL,
  `categories` json DEFAULT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `review_id_UNIQUE` (`review_id`),
  KEY `Node` (`node_fk`) /*!80000 INVISIBLE */,
  KEY `User_idx` (`user_fk`),
  CONSTRAINT `Node` FOREIGN KEY (`node_fk`) REFERENCES `nodes` (`node_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `User` FOREIGN KEY (`user_fk`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,NULL,'List Name',NULL,NULL,'C','private','Node Name 5','Perfect disambiguation','Category','Type',14,21,1,'2024-07-16 17:26:25','2024-07-16 17:26:25','',NULL,0,'','\"Cat\"','\"#tag1, #tag2\"'),(2,NULL,'List Name',NULL,NULL,'C','private','Ramen','Perfect disambiguation','Category','Type',14,22,1,'2024-07-16 17:34:23','2024-07-16 17:34:23','One of my favorite soups.',NULL,4,'Noodle soup','\"Meal\"','\"#japanese, #food\"'),(3,NULL,'List Name',NULL,NULL,'C','private','Menudo','Perfect disambiguation','Category','Type',14,23,1,'2024-07-16 18:23:37','2024-07-16 18:23:37','Longo comment',NULL,4,'Yum!','\"Meal, Soup\"','\"#mexican\"'),(4,NULL,'List Name',NULL,NULL,'C','private','Insane','Perfect disambiguation','Category','Type',14,24,1,'2024-07-17 07:05:27','2024-07-17 07:05:27','band: \"Cavalera Conspiracy\", album: \"Psychosis\"',NULL,4,'','\"Song\"','\"#heavy-metal\"'),(5,NULL,'List Name',NULL,NULL,'C','private','We Who Are Not As Others 2','Perfect disambiguation','Category','Type',14,27,1,'2024-07-19 21:12:41','2024-07-19 21:12:41','Very good.',NULL,4,'Good','\"Song by Sepultura\"','\"#groove-metal\"'),(6,NULL,'List Name',NULL,NULL,'C','private','Pickup Full of Pink Carnations','Album by The Vaccines','Category','Type',14,28,1,'2024-07-19 21:58:33','2024-07-19 21:58:33','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',NULL,4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','\"Indie Rock\"','\"#chill\"'),(7,NULL,'List Name',NULL,NULL,'C','private','Liquid Death','Sparkling Water','Category','Type',14,29,1,'2024-07-22 14:33:57','2024-07-22 14:33:57','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',NULL,4,'Sparkling water in an aluminum can that looks like a beer can decorated in a \"metal\" aesthetic.','\"Drink - Sparkling Water\"','\"#tag1, #tag2\"'),(8,NULL,'List Name',NULL,NULL,'B','private','Liquid Death','Mountain Water 5','Drink','Water',14,35,1,'2024-07-23 18:45:43','2024-07-23 18:45:43',NULL,NULL,0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',NULL,NULL),(9,NULL,'List Name',NULL,NULL,'C','private','Item','Disam 1','Test','Blue',14,36,1,'2024-07-23 18:49:14','2024-07-23 18:49:14',NULL,NULL,0,'Brief description.',NULL,NULL),(10,NULL,'List Name',NULL,NULL,'C','private','A','D','Cat','Type',14,37,1,'2024-07-23 18:50:02','2024-07-23 18:50:02',NULL,NULL,0,'Brief',NULL,NULL),(11,NULL,'List Name',NULL,NULL,'C','private','A','D1','C','T',14,38,1,'2024-07-23 18:52:29','2024-07-23 18:52:29',NULL,NULL,0,'B',NULL,NULL),(12,NULL,'List Name',NULL,NULL,'C','private','Eveready','Super Heavy Duty AA Batteries','Battery','Super Heavy Duty AA',14,39,1,'2024-07-23 18:54:26','2024-07-23 18:54:26',NULL,NULL,0,'Brief',NULL,NULL),(13,NULL,'List Name',NULL,NULL,'C','private','Profile Ball 1.0','Papermate Pen','Writing Tool','Pen',14,40,1,'2024-07-23 18:59:47','2024-07-23 18:59:47',NULL,NULL,0,'Brief',NULL,NULL),(14,NULL,'List Name',NULL,NULL,'A','private','Quesadilla','Food from Guisados in Hermosa Beach','Category','Type',14,41,1,'2024-07-23 21:22:22','2024-07-23 21:22:22',NULL,NULL,0,'',NULL,NULL),(15,NULL,'List Name',NULL,NULL,'A','private','Taco de Chuleta en Chile Verde','Food from Guisados in Hermosa Beach','Category','Type',14,42,1,'2024-07-23 21:26:04','2024-07-23 21:26:04',NULL,NULL,0,'',NULL,NULL),(16,NULL,'List Name',NULL,NULL,'B','private','Taco de Tinga','Guisados - Hermosa Beach','Category','Type',14,43,1,'2024-07-23 22:09:52','2024-07-23 22:09:52',NULL,NULL,0,'',NULL,NULL),(17,NULL,'List Name',NULL,NULL,'C','private','PaperMate Profile Ball 1.0','Ballpoint Pens','Category','Type',14,44,1,'2024-07-24 01:08:34','2024-07-24 01:08:34',NULL,NULL,0,'',NULL,NULL),(18,NULL,'List Name',NULL,NULL,'C','private','Bill Rosendahl Del Rey Park','Parks in Los Angeles','Category','Type',14,45,1,'2024-07-24 01:12:36','2024-07-24 01:12:36',NULL,NULL,0,'',NULL,NULL),(19,NULL,'List Name',NULL,NULL,'S','private','Ramen','Meals','Category','Type',14,46,1,'2024-07-24 01:16:23','2024-07-24 01:16:23',NULL,NULL,0,'',NULL,NULL),(20,'basic','List Name',NULL,NULL,'C','private','Sharpie Fine Point','Permanent Markers','Category','Type',14,47,1,'2024-07-24 04:19:40','2024-07-24 04:19:40',NULL,NULL,0,'',NULL,NULL),(21,'basic','List Name',NULL,NULL,'B','private','Liquid Death Mountain Water','Bottled Water','Category','Type',14,48,1,'2024-07-24 04:25:52','2024-07-24 04:25:52',NULL,NULL,0,'',NULL,NULL),(22,'basic','List Name',NULL,NULL,'S','private','Liquid Death Sparkling Water 2','Refreshments','Bottled Water','Sparkling',14,49,1,'2024-07-24 05:05:31','2024-07-25 04:13:29','',NULL,0,'','\"\"','\"\"'),(26,'basic','List Name',NULL,NULL,'S','private','Milwaukee 48-22-6100','Lineman\'s Pliers','Category','Type',14,53,1,'2024-07-26 06:37:48','2024-07-26 06:38:20','',NULL,0,'','\"\"','\"\"'),(27,'basic','List Name',NULL,NULL,'B','private','Mint 3','Tea','Category','Type',14,54,1,'2024-07-26 21:50:29','2024-07-26 21:50:29',NULL,NULL,0,'',NULL,NULL),(28,'basic','List Name',NULL,NULL,'B','private','Test 6','Testing','Category','Type',14,55,1,'2024-07-26 21:53:35','2024-07-26 21:53:35',NULL,NULL,0,'',NULL,NULL),(29,'basic','List Name',NULL,NULL,'B','private','T5','T','Category','Type',14,56,1,'2024-07-26 22:04:33','2024-07-26 22:04:33',NULL,NULL,0,'',NULL,NULL),(30,'basic','List Name',NULL,NULL,'B','private','T6','T','Category','Type',14,57,1,'2024-07-26 22:05:32','2024-07-26 22:05:32',NULL,NULL,0,'',NULL,NULL),(31,'basic','List Name',NULL,NULL,'C','private','T1','TT','Category','Type',14,58,1,'2024-07-30 22:06:07','2024-07-30 22:06:07',NULL,NULL,0,'',NULL,NULL),(32,'basic','List Name',NULL,NULL,'S','private','T1','List Name T1','Category','Type',14,59,1,'2024-07-31 01:52:27','2024-07-31 01:52:27',NULL,NULL,0,'',NULL,NULL),(33,'basic','List Name',NULL,NULL,'C','private','T2','List Name T2','Category','Type',10,60,1,'2024-07-31 02:00:02','2024-07-31 02:00:02',NULL,NULL,0,'',NULL,NULL),(34,'basic','List Name',NULL,NULL,'C','public','Sometimes, I Swear','Songs from Pickup Full of Pink Carnations','Category','Type',14,61,1,'2024-08-01 06:15:33','2024-08-01 06:15:33',NULL,NULL,0,'',NULL,NULL),(35,'basic','List Name',NULL,NULL,'B','public','Heartbreak Kid','Songs from Pickup Full of Pink Carnations','Category','Type',14,62,1,'2024-08-01 06:15:51','2024-08-01 06:15:51',NULL,NULL,0,'',NULL,NULL),(36,'basic','List Name',NULL,NULL,'C','public','Lunar Eclipse','Songs from Pickup Full of Pink Carnations','Category','Type',14,63,1,'2024-08-01 06:16:31','2024-08-01 06:16:31',NULL,NULL,0,'',NULL,NULL),(37,'basic','List Name',NULL,NULL,'A','public','Love to Walk Away','Songs from Pickup Full of Pink Carnations','Category','Type',19,64,1,'2024-08-01 06:37:18','2024-08-01 06:37:18',NULL,NULL,0,'',NULL,NULL),(38,'basic','Test List',NULL,NULL,'B','public','Devant','Songs on Ornaments album by Sferro','Category','Type',19,65,1,'2024-08-01 06:54:26','2024-08-01 06:54:44','',NULL,0,'','\"\"','\"\"'),(39,'basic','Test List',NULL,NULL,'A','public','Rhinoceros on Gish by Smashing Pumpkins','Songs','Category','Type',19,66,1,'2024-08-01 06:59:40','2024-08-01 06:59:40',NULL,NULL,0,'',NULL,NULL),(40,'basic','Indie Rock Songs','Civil Engineer','by Astronauts','B','public','Civil Engineer by Astronauts','Indie Rock Songs','Category','Type',19,67,1,'2024-08-02 06:20:20','2024-08-02 06:20:20',NULL,NULL,0,'',NULL,NULL),(41,'basic','Alternative Rock Songs','No Rain','by Blind Melon','S','public','No Rain by Blind Melon','Alternative Rock Songs','Category','Type',19,68,1,'2024-08-02 06:26:45','2024-08-02 06:26:45',NULL,NULL,0,'',NULL,NULL),(42,'basic','Indie Rock Songs','Talking Backwards','by Real Estate','B','public','Talking Backwards by Real Estate','Indie Rock Songs Lorem ipsum dolor sit amet','Category','Type',19,69,1,'2024-08-02 06:31:06','2024-08-05 21:02:16','',NULL,0,'','\"\"','\"\"'),(43,'basic','Musical Masterpieces','Never Far','by Humans are Such a Fragile Machine','S','public','Never Far','Classical Music','Category','Type',19,70,1,'2024-08-05 21:21:13','2024-08-05 21:21:13',NULL,NULL,0,'',NULL,NULL),(44,'basic','Musical Masterpieces','False God','by Paul Harris','S','public','False God by Paul Harris','Best Songs','Category','Type',19,71,1,'2024-08-05 21:51:52','2024-08-05 21:51:52',NULL,NULL,0,'',NULL,NULL),(45,'basic','List Name',NULL,NULL,'A','public','Node','Perfect disambiguation','Category','Type',19,72,1,'2024-08-08 06:02:51','2024-08-08 06:02:51',NULL,NULL,0,NULL,NULL,NULL),(46,'basic','List Name',NULL,NULL,'C','public','Node','Perfect disambiguation','Category','Type',19,73,1,'2024-08-08 06:06:14','2024-08-08 06:06:14',NULL,NULL,0,NULL,NULL,NULL),(47,'basic','Beers: Los Angeles II','Greetings from El Segundo','Beer by El Segundo Brewing Company','A','public','Node','Perfect disambiguation','Category','Type',19,75,1,'2024-08-08 06:12:18','2024-08-08 06:12:18',NULL,NULL,0,NULL,NULL,NULL),(48,'basic','Son del Eje','Cumbia Sobre el Mar','Song by Quantic, Flowering Inferno','A','public','Node','Perfect disambiguation','Category','Type',19,76,1,'2024-08-08 06:45:53','2024-08-08 06:45:53',NULL,NULL,0,NULL,NULL,NULL),(49,'basic','Son del Eje','Willy\'s Merengue','Song by Los Miticos del Ritmo','A','public','Node','Perfect disambiguation','Category','Type',19,77,1,'2024-08-08 06:46:36','2024-08-08 06:46:36',NULL,NULL,0,NULL,NULL,NULL),(50,'basic','Instrumental Metal','Gnosis','Album by Russian Circles','A','public','Node','Perfect disambiguation','Category','Type',19,78,1,'2024-08-08 08:02:19','2024-08-08 08:02:19',NULL,NULL,0,NULL,NULL,NULL),(51,'basic','90s Alternative Rock','The Distance','Song by CAKE','B','public','Node','Perfect disambiguation','Category','Type',19,79,1,'2024-08-08 08:11:55','2024-08-08 08:11:55',NULL,NULL,0,NULL,NULL,NULL),(52,'basic','90s Alternative Rock','In the Meantime','Song by Spacehog','C','public','Node','Perfect disambiguation','Category','Type',19,80,1,'2024-08-08 08:13:24','2024-08-08 08:13:24',NULL,NULL,0,NULL,NULL,NULL),(53,'basic','90s Alternative Rock','No Rain','Song by Blind Melon','S','public','Node','Perfect disambiguation','Category','Type',19,81,1,'2024-08-08 08:16:13','2024-08-08 08:16:13',NULL,NULL,0,NULL,NULL,NULL),(54,'basic','Alternative Dance Playlist','SEXY DANCE','Song by Masayoshi Takanaka on album AN INSATIABLE HIGH','S','public','Node','Perfect disambiguation','Category','Type',19,82,1,'2024-08-08 08:22:36','2024-08-08 08:22:36',NULL,NULL,0,NULL,NULL,NULL),(55,'basic','Mexican Playlist','Cuatro Velas','Song by Ezequiel Pena','S','public','Node','Perfect disambiguation','Category','Type',19,83,1,'2024-08-08 08:33:43','2024-08-08 08:33:43',NULL,NULL,0,NULL,NULL,NULL),(56,'basic','Indie Music','Hadsel','Song by Beirut on Album Hadsel','C','public','Node','Perfect disambiguation','Category','Type',19,84,1,'2024-08-11 05:41:01','2024-08-11 05:41:01',NULL,NULL,0,NULL,NULL,NULL),(57,'basic','Indie Music','So Many Plans','Song by Beirut on Album Hadsel','C','public','Node','Perfect disambiguation','Category','Type',19,85,1,'2024-08-11 05:55:27','2024-08-11 05:55:27',NULL,NULL,0,NULL,NULL,NULL),(58,'basic','Indie Music','Stokmarknes','Song by Beirut on Album Hadsel','B','public','Node','Perfect disambiguation','Category','Type',19,86,1,'2024-08-11 05:59:53','2024-08-11 05:59:53',NULL,NULL,0,NULL,NULL,NULL),(59,'basic','Indie Music','January 18th','Song by Beirut on Album Hadsel','A','public','Node','Perfect disambiguation','Category','Type',19,87,1,'2024-08-11 06:07:45','2024-08-11 06:07:45',NULL,NULL,0,NULL,NULL,NULL),(60,'basic','Indie Music','A Candle\'s Fire','Song by Beirut on Album The Rip Tide','B','public','Node','Perfect disambiguation','Category','Type',19,88,1,'2024-08-11 06:13:14','2024-08-11 06:13:14',NULL,NULL,0,NULL,NULL,NULL),(61,'basic','Indie Music','Santa Fe','Song by Beirut on Album The Rip Tide','A','public','Node','Perfect disambiguation','Category','Type',19,89,1,'2024-08-11 06:14:11','2024-08-11 06:14:11',NULL,NULL,0,NULL,NULL,NULL);
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
  `reset_token` varchar(45) DEFAULT NULL,
  `reset_token_expiry` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'zero@m.com','password123','johndoe','John Doe',NULL,'2024-08-13 22:40:17','2024-06-28 22:17:35','2024-06-28 22:17:35'),(2,'a@a.com','aaa','aaa','aaa',NULL,'2024-08-13 22:40:17','2024-06-28 22:17:35','2024-06-28 22:17:35'),(4,'b@b.com','bbb','bbb','bbb',NULL,'2024-08-13 22:40:17','2024-06-28 22:17:35','2024-06-28 22:17:35'),(5,'c@c.com','ccc','ccc','ccc',NULL,'2024-08-13 22:40:17','2024-06-29 05:19:07','2024-06-29 05:19:07'),(6,'d@d.com','ddd','ddd','ddd',NULL,'2024-08-13 22:40:17','2024-07-06 01:31:15','2024-07-06 01:31:15'),(7,'e@e.com','eee','eee','eee',NULL,'2024-08-13 22:40:17','2024-07-07 17:51:56','2024-07-07 17:51:56'),(8,'f@f.com','fff','fff','fff',NULL,'2024-08-13 22:40:17','2024-07-07 18:14:13','2024-07-07 18:14:13'),(9,'g@g.com','ggg','ggg','ggg',NULL,'2024-08-13 22:40:17','2024-07-07 21:00:48','2024-07-07 21:00:48'),(10,'h@h.com','$2b$10$rhIKmzR4pfJdlqVhjiZymOv7JmC4tUOMGodcDhV0uJtdK1ISU93zC','h','h',NULL,'2024-08-13 22:40:17','2024-07-08 04:34:36','2024-07-08 04:34:36'),(11,'i@i.com','$2b$10$Qma95W9FNQnT5LhyVgiMN.ZjSgB/Vq.vE87fxyhCdyDJqsrAFfkAy','i','i',NULL,'2024-08-13 22:40:17','2024-07-09 01:00:36','2024-07-09 01:00:36'),(12,'j@j.com','$2b$10$AGTwZ4snKlA22p4iAVoOdesLrw4aEiW0igum8KwGUJNFT8Kwu4fxC','j','j',NULL,'2024-08-13 22:40:17','2024-07-09 04:00:13','2024-07-09 04:00:13'),(13,'l@l.com','$2b$10$Sk1mUYJdUMDi2uv5FoBqDunJW8LKhcXxmpng2vI6IoeMFjMmAu5cq','l','l',NULL,'2024-08-13 22:40:17','2024-07-10 04:11:59','2024-07-10 04:11:59'),(14,'m@m.com','$2b$10$dPPfJ3qHR1OzsiHmbIP5WOJCVTcTkb1hjyeSfx0UIsmRbgpFU8xba','m','m',NULL,'2024-08-13 22:40:17','2024-07-14 14:48:03','2024-07-14 14:48:03'),(15,'aa@a.com','$2b$10$yHGF7XLzLXqIqMfmhfLGUO5IdKtmi0zggt7XTKTXlG/vQAPx/lNRu','a','a',NULL,'2024-08-13 22:40:17','2024-07-30 21:39:07','2024-07-30 21:39:07'),(17,'a1@a.com','$2b$10$djOxjlzv3.Je.k8FurtVNOzNDgooYVkKfq.qbE7AxtQ50ZsmDH2Lu','a1','a1',NULL,'2024-08-13 22:40:17','2024-07-30 21:41:17','2024-07-30 21:41:17'),(18,'a2@a.com','$2b$10$1HH1isvTXFYVOwAM6Z8qYeP3mVGR2kOWfSJrIsOF/bQWxrdNPcywS','a2','a2',NULL,'2024-08-13 22:40:17','2024-07-30 21:42:01','2024-07-30 21:42:01'),(19,'z@z.com','$2b$10$AxU/nxOk.uvO48DhyyGqFeWHrVlP93BK6RzqTgBWzzCRKdYjgqEUe','Z','Z',NULL,'2024-08-13 22:40:17','2024-08-01 06:36:27','2024-08-01 06:36:27'),(20,'jcruzedx@gmail.com','$2b$10$NX78t9XxNusS0Pimm6aDIu29.HfJgSbJBed5olm7GsVcIFbkQ9Bmu','joel','Joel Cruz','2779c5cfca08c0a4db3c6a934937cea5518b2455','2024-08-14 17:07:40','2024-08-14 08:38:48','2024-08-14 16:09:02');
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

-- Dump completed on 2024-08-14  9:12:38
