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
  `name` varchar(255) NOT NULL DEFAULT 'Noname',
  `categories` json NOT NULL,
  `tags` json DEFAULT NULL,
  `aliases` json DEFAULT NULL,
  `data` json DEFAULT NULL,
  `description` mediumtext,
  `owner_fk` int unsigned NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater_fk` int unsigned DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`node_id`),
  UNIQUE KEY `id_nodes_UNIQUE` (`node_id`) /*!80000 INVISIBLE */,
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `Node Owner_idx` (`owner_fk`),
  KEY `Updater_idx` (`updater_fk`),
  CONSTRAINT `Node Owner` FOREIGN KEY (`owner_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Updater` FOREIGN KEY (`updater_fk`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nodes`
--

LOCK TABLES `nodes` WRITE;
/*!40000 ALTER TABLE `nodes` DISABLE KEYS */;
INSERT INTO `nodes` VALUES (12,'Node','\"Category\"',NULL,NULL,NULL,NULL,14,'2024-07-14 15:52:20',14,'2024-07-14 15:52:20'),(13,'Node2','\"Category\"',NULL,NULL,NULL,NULL,14,'2024-07-14 16:09:04',NULL,'2024-07-14 16:09:04'),(14,'Node3','\"Cat3\"',NULL,NULL,NULL,NULL,14,'2024-07-14 17:23:42',NULL,'2024-07-14 17:23:42'),(15,'Node for L','\"Cat L\"',NULL,NULL,NULL,NULL,13,'2024-07-14 17:24:53',NULL,'2024-07-14 17:24:53'),(16,'Bananas','\"Fruit\"',NULL,NULL,NULL,NULL,14,'2024-07-15 18:03:38',NULL,'2024-07-15 18:03:38'),(17,'Node Name 1','\"Category 1, Category 2\"',NULL,NULL,NULL,NULL,14,'2024-07-16 17:12:06',NULL,'2024-07-16 17:12:06'),(18,'Node Name 2','\"Cat\"',NULL,NULL,NULL,NULL,14,'2024-07-16 17:17:49',NULL,'2024-07-16 17:17:49'),(19,'Node Name 3','\"Cat\"',NULL,NULL,NULL,NULL,14,'2024-07-16 17:18:58',NULL,'2024-07-16 17:18:58'),(20,'Node Name 4','\"Cat\"',NULL,NULL,NULL,NULL,14,'2024-07-16 17:25:25',NULL,'2024-07-16 17:25:25'),(21,'Node Name 5','\"Cat\"',NULL,NULL,NULL,NULL,14,'2024-07-16 17:26:25',NULL,'2024-07-16 17:26:25'),(22,'Ramen','\"Meal\"',NULL,NULL,NULL,NULL,14,'2024-07-16 17:34:23',NULL,'2024-07-16 17:34:23'),(23,'Menudo','\"Meal, Soup\"',NULL,NULL,NULL,NULL,14,'2024-07-16 18:23:37',NULL,'2024-07-16 18:23:37'),(24,'Insane','\"Song\"',NULL,NULL,NULL,NULL,14,'2024-07-17 07:05:27',NULL,'2024-07-17 07:05:27');
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
  `alias` varchar(255) NOT NULL DEFAULT 'Node',
  `score` int NOT NULL DEFAULT '0',
  `categories` json NOT NULL,
  `tags` json DEFAULT NULL,
  `brief` varchar(255) DEFAULT NULL,
  `comment` mediumtext,
  `user_fk` int unsigned NOT NULL DEFAULT '0',
  `node_fk` int unsigned NOT NULL DEFAULT '0',
  `rubric_fk` int unsigned NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `review_id_UNIQUE` (`review_id`),
  KEY `Node` (`node_fk`) /*!80000 INVISIBLE */,
  KEY `User_idx` (`user_fk`),
  CONSTRAINT `Node` FOREIGN KEY (`node_fk`) REFERENCES `nodes` (`node_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `User` FOREIGN KEY (`user_fk`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Node Name 5',0,'\"Cat\"','\"#tag1, #tag2\"','','',14,21,1,'2024-07-16 17:26:25','2024-07-16 17:26:25'),(2,'Ramen',4,'\"Meal\"','\"#japanese, #food\"','Noodle soup','One of my favorite soups.',14,22,1,'2024-07-16 17:34:23','2024-07-16 17:34:23'),(3,'Menudo',4,'\"Meal, Soup\"','\"#mexican\"','Yum!','Longo comment',14,23,1,'2024-07-16 18:23:37','2024-07-16 18:23:37'),(4,'Insane',4,'\"Song\"','\"#heavy-metal\"','','band: \"Cavalera Conspiracy\", album: \"Psychosis\"',14,24,1,'2024-07-17 07:05:27','2024-07-17 07:05:27');
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

-- Dump completed on 2024-07-17  3:05:16
