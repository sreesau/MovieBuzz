-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2024 at 12:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviebuzz_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminapi_booking`
--

CREATE TABLE `adminapi_booking` (
  `id` bigint(20) NOT NULL,
  `bookingDate` varchar(500) NOT NULL,
  `bookingTime` varchar(50) NOT NULL,
  `noOfSeats` int(11) NOT NULL,
  `ticketCost` int(11) NOT NULL,
  `totalCost` int(11) NOT NULL,
  `bookingId` char(32) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `movie_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminapi_booking`
--

INSERT INTO `adminapi_booking` (`id`, `bookingDate`, `bookingTime`, `noOfSeats`, `ticketCost`, `totalCost`, `bookingId`, `movieName`, `user_id`, `movie_id`) VALUES
(3, '2024-06-29', 'true', 2, 170, 170, 'b8431c51e60a4938b90ded050635fa06', 'Thalavan', 2, 4),
(4, '2024-06-27', 'true', 3, 170, 170, '5448ddfddad34c37ba04ef43d8712082', 'unknown', 2, 0),
(5, '2024-07-05', 'true', 2, 170, 170, '875394e621464d67b58fc48c5f679dcf', 'Grrr...', 2, 2),
(6, '2024-07-05', 'true', 2, 170, 170, '040aa6ed009b438a86a77078225e9ec3', 'Grrr...', 2, 0),
(7, '2024-07-05', 'true', 2, 170, 340, '24ef195d0ec248eaa1f90f5ed9542691', 'Grrr...', 2, 0),
(8, '2024-07-05', 'true', 2, 170, 340, 'd6cb212e34c84343a7e1680b7c5b20ab', 'Grrr...', 2, 0),
(9, '2024-07-05', 'true', 2, 170, 340, '03b8135476b544bc84804851a28c95bc', 'Grrr...', 2, 0),
(10, '2024-07-05', 'true', 2, 170, 340, '905a2b3746ab4809965da60552c0bf17', 'Grrr...', 2, 0),
(11, '2024-06-26', 'true', 2, 170, 340, 'e20d2a83597d40d7a51b9b22c359cf32', 'Grrr...', 2, 0),
(12, '2024-06-26', 'true', 2, 170, 340, '96e8a40d60b940089d463741739d9ed4', 'Grrr...', 2, 0),
(13, '2024-06-27', 'true', 2, 150, 300, 'b604ef937324425c9b176b5f38a3b3b8', 'Maharaja', 2, 0),
(14, '2024-06-27', 'true', 1, 150, 150, '5131ed7902dc4d299c247553117aed35', 'Maharaja', 2, 0),
(15, '2024-06-28', 'true', 1, 150, 150, '1712f79bc0ba47a4b2b96869c67baaf9', 'Maharaja', 2, 0),
(16, '2024-06-28', 'true', 1, 150, 150, '77b3ef56fe2f4023897e4f814325a603', 'Maharaja', 2, 0),
(17, '2024-06-27', 'true', 1, 150, 150, '72a80de76bad4f5991f4fc895b5e3e13', 'Maharaja', 2, 0),
(18, '2024-06-27', 'true', 1, 150, 150, 'c5faecfad1dc46668fd4c6c63da2f23d', 'Maharaja', 2, 0),
(19, '2024-06-28', 'true', 1, 150, 150, 'd58f5c1cd0b145bcb25e46b567042051', 'Maharaja', 2, 0),
(20, '2024-06-28', 'true', 1, 150, 150, '77362e8e26b84b3d91504275b9c5735f', 'Maharaja', 2, 0),
(21, '2024-06-27', 'true', 1, 170, 170, 'b6771e3a66c04d8e85c09ddaa22887ae', 'Grrr...', 2, 0),
(22, '2024-06-28', 'true', 2, 170, 340, '353fffc36e164eacb34f2057dfbf19fe', 'Grrr...', 2, 0),
(23, '2024-06-27', 'true', 1, 170, 170, '61eaeb1687d344f8878cf6b4c1d148a4', 'Grrr...', 2, 0),
(24, '2024-06-28', 'true', 2, 150, 300, '47c38c3ddac14cfca37e52028df4fc07', 'Turbo', 2, 0),
(25, '2024-06-27', 'true', 2, 150, 300, '98f416f091fb4a4ebf7a0afe1c0ffa1c', 'Turbo', 2, 0),
(26, '2024-06-27', 'true', 1, 150, 150, '1c444659b2d348fea715a4f9a8bf69bd', 'Maharaja', 2, 0),
(27, '2024-06-27', 'true', 2, 150, 300, '857a7e8233f24d07b7081fa433d9cd52', 'Turbo', 2, 0),
(28, '2024-07-05', 'true', 2, 190, 380, 'ef2d95c4bcfc4314a9700bb22011f625', 'Chandu Champion', 2, 0),
(29, '2024-06-24', 'true', 2, 150, 300, 'a4f8b16c368d491dbc4bb1a34efaef75', 'Turbo', 2, 0),
(30, '2024-06-24', 'true', 2, 150, 300, '78f0bd3ae25d4fa2b31e97218c8c3420', 'Maharaja', 2, 0),
(31, '2024-07-04', 'true', 1, 190, 190, '85aac178cbe74200a4e7dc4bd2ca2c6a', 'Chandu Champion', 2, 0),
(32, '2024-07-04', 'true', 2, 190, 380, '6f2e0386b4924dc494152911a9ae69db', 'Chandu Champion', 2, 0),
(33, '2024-07-01', 'true', 2, 160, 320, '0cf57c832f794c30a3be85e351278641', 'Golam', 2, 0),
(34, '2024-06-27', 'true', 2, 170, 340, '5bb3368e15a94b5195020a31a3e8a86b', 'Grrr...', 2, 0),
(35, '2024-07-05', 'true', 2, 190, 380, '78572e51aa724b3eb27026dd36614e10', 'Chandu Champion', 2, 0),
(36, '2024-07-05', 'true', 2, 190, 380, '654782f4ea0a4bb89895e2d63b425cfb', 'Chandu Champion', 2, 0),
(37, '2024-07-04', 'true', 2, 190, 380, 'f5a22f48c8d647beaa63876ccdfa38e7', 'Chandu Champion', 2, 0),
(43, '2024-07-25', '1', 2, 190, 380, 'f7fc8fcc4a204d65b13f58fb61ebfcf3', 'Chandu Champion', 2, 1),
(44, '2024-07-23', '1', 3, 150, 450, 'bef9a24672a343dbbce55bcc4ddea931', 'Turbo', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `adminapi_movie`
--

CREATE TABLE `adminapi_movie` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `desc` longtext NOT NULL,
  `genre` longtext NOT NULL,
  `ticketCost` decimal(10,2) NOT NULL,
  `poster` varchar(1000) NOT NULL,
  `trailer` varchar(1000) NOT NULL,
  `time1` varchar(50) NOT NULL,
  `time2` varchar(50) NOT NULL,
  `time3` varchar(50) NOT NULL,
  `time4` varchar(50) NOT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date NOT NULL,
  `is_enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminapi_movie`
--

INSERT INTO `adminapi_movie` (`id`, `name`, `desc`, `genre`, `ticketCost`, `poster`, `trailer`, `time1`, `time2`, `time3`, `time4`, `startDate`, `endDate`, `is_enabled`) VALUES
(2, 'Grrr...', 'A Drunk man trespasses into a Lion`s enclosure in the zoo and the security guard jumps to rescue him. The encounter with `Darshan` The King, in his territory will change their lives forever.', 'Comedy', 170.00, 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mi41SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00400881-yxxdpzvjsm-portrait.jpg', 'https://youtu.be/EP8FRtK5un0', '1', '1', '1', '1', '2024-06-06', '2024-07-16', 1),
(3, 'Chandu Champion', 'This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to the creation of history. This is the story of Chandu Champion!', 'Biography,Sports', 190.00, 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjkuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363650-elhvnputsv-portrait.jpg', 'https://youtu.be/IHQQK_Wn5DM', '1', '1', '1', '0', '2024-06-29', '2024-08-23', 1),
(4, 'Thalavan', 'Retired Dysp Udhayabhanu narrates events of his professional life in a TV program. He reveals the intriguing details of the \'Chepanamthota case\', a milestone event in his career.', 'Crime, Thriller', 170.00, 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAyMC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00382278-jgwxcxpumg-portrait.jpg', 'https://youtu.be/jhUyy5DdUZI', '1', '1', '1', '1', '2024-06-21', '2024-07-21', 1),
(5, 'Golam', 'A mysterious death during work hours in an office puzzles all but only investigator ASP Sandeep Krishna observes it as a murder.', 'Mystery', 160.00, 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAxLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398266-femwrqnkwn-portrait.jpg', 'https://youtu.be/vL6l-9OqmfU', '1', '1', '1', '1', '2024-06-13', '2024-07-31', 1),
(6, 'Turbo', 'Jose, a jeep driver from Idukki gets in trouble and is forced to relocate to Chennai where he gets entangled with Indhu and his best friend, Jerry. However, a bunch of surprises in the form of Vetrivel and others await Jose in Chennai!', 'Action', 150.00, 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0NS40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396952-mczyckfrlt-portrait.jpg', 'https://youtu.be/LOE8ESPIMpE', '1', '1', '1', '1', '2024-06-14', '2024-07-23', 1);

-- --------------------------------------------------------

--
-- Table structure for table `authtoken_token`
--

CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authtoken_token`
--

INSERT INTO `authtoken_token` (`key`, `created`, `user_id`) VALUES
('1b35170bf526bdb8444bdc665552cdfbc8ed37a5', '2024-07-23 08:45:43.610463', 2);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add movie', 7, 'add_movie'),
(26, 'Can change movie', 7, 'change_movie'),
(27, 'Can delete movie', 7, 'delete_movie'),
(28, 'Can view movie', 7, 'view_movie'),
(29, 'Can add booking', 8, 'add_booking'),
(30, 'Can change booking', 8, 'change_booking'),
(31, 'Can delete booking', 8, 'delete_booking'),
(32, 'Can view booking', 8, 'view_booking'),
(33, 'Can add Token', 9, 'add_token'),
(34, 'Can change Token', 9, 'change_token'),
(35, 'Can delete Token', 9, 'delete_token'),
(36, 'Can view Token', 9, 'view_token'),
(37, 'Can add Token', 10, 'add_tokenproxy'),
(38, 'Can change Token', 10, 'change_tokenproxy'),
(39, 'Can delete Token', 10, 'delete_tokenproxy'),
(40, 'Can view Token', 10, 'view_tokenproxy');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$720000$J2ulz8JJZAW2cQ6zAgHbE0$2O0MI6KBA0fW+zHsuu8tT5xk28U1gMp1F28OT7XBPiI=', NULL, 0, 'admin@moviebuzz', '', '', 'admin@moviebuzz.com', 0, 1, '2024-06-21 17:23:01.682846'),
(2, 'pbkdf2_sha256$720000$m6Ex67jGPYnjvLlVE3IlsC$56yYSPlY/nftmnAvRfzrBVTxFThwDVk63faQzms732c=', NULL, 0, 'saumya', '', '', 'saumya@gmail.com', 0, 1, '2024-06-21 17:35:51.663373');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(8, 'adminApi', 'booking'),
(7, 'adminApi', 'movie'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(9, 'authtoken', 'token'),
(10, 'authtoken', 'tokenproxy'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-06-21 12:38:04.992118'),
(2, 'auth', '0001_initial', '2024-06-21 12:38:06.184504'),
(3, 'admin', '0001_initial', '2024-06-21 12:38:06.427328'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-06-21 12:38:06.476782'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-06-21 12:38:06.501472'),
(6, 'adminApi', '0001_initial', '2024-06-21 12:38:06.830518'),
(7, 'contenttypes', '0002_remove_content_type_name', '2024-06-21 12:38:06.959283'),
(8, 'auth', '0002_alter_permission_name_max_length', '2024-06-21 12:38:07.074075'),
(9, 'auth', '0003_alter_user_email_max_length', '2024-06-21 12:38:07.109131'),
(10, 'auth', '0004_alter_user_username_opts', '2024-06-21 12:38:07.121443'),
(11, 'auth', '0005_alter_user_last_login_null', '2024-06-21 12:38:07.213345'),
(12, 'auth', '0006_require_contenttypes_0002', '2024-06-21 12:38:07.218332'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2024-06-21 12:38:07.236646'),
(14, 'auth', '0008_alter_user_username_max_length', '2024-06-21 12:38:07.265144'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2024-06-21 12:38:07.287463'),
(16, 'auth', '0010_alter_group_name_max_length', '2024-06-21 12:38:07.315850'),
(17, 'auth', '0011_update_proxy_permissions', '2024-06-21 12:38:07.331474'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2024-06-21 12:38:07.356874'),
(19, 'authtoken', '0001_initial', '2024-06-21 12:38:07.573439'),
(20, 'authtoken', '0002_auto_20160226_1747', '2024-06-21 12:38:07.610580'),
(21, 'authtoken', '0003_tokenproxy', '2024-06-21 12:38:07.616076'),
(22, 'authtoken', '0004_alter_tokenproxy_options', '2024-06-21 12:38:07.624056'),
(23, 'sessions', '0001_initial', '2024-06-21 12:38:07.688886'),
(24, 'adminApi', '0002_alter_booking_name_alter_movie_enddate', '2024-06-21 18:37:50.535609'),
(25, 'adminApi', '0003_alter_movie_enddate', '2024-06-21 18:40:01.063825'),
(26, 'adminApi', '0004_rename_name_booking_movie_alter_movie_enddate', '2024-06-21 18:51:30.811845'),
(27, 'adminApi', '0005_alter_booking_movie_alter_movie_enddate', '2024-06-21 18:59:19.243221'),
(28, 'adminApi', '0006_alter_booking_movie_alter_movie_enddate_and_more', '2024-06-23 15:44:06.125714');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminapi_booking`
--
ALTER TABLE `adminapi_booking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bookingId` (`bookingId`),
  ADD KEY `adminApi_booking_user_id_26076280_fk_auth_user_id` (`user_id`),
  ADD KEY `adminApi_booking_movie_id_8f5e6427_fk_adminApi_movie_id` (`movie_id`);

--
-- Indexes for table `adminapi_movie`
--
ALTER TABLE `adminapi_movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminapi_booking`
--
ALTER TABLE `adminapi_booking`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `adminapi_movie`
--
ALTER TABLE `adminapi_movie`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adminapi_booking`
--
ALTER TABLE `adminapi_booking`
  ADD CONSTRAINT `adminApi_booking_user_id_26076280_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD CONSTRAINT `authtoken_token_user_id_35299eff_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
