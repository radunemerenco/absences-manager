-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 28, 2017 at 08:14 PM
-- Server version: 10.0.32-MariaDB-0+deb8u1
-- PHP Version: 7.0.22-1~dotdeb+8.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `radik_absences`
--

-- --------------------------------------------------------

--
-- Table structure for table `absences`
--

CREATE TABLE `absences` (
  `id` int(11) NOT NULL,
  `id_student` int(11) NOT NULL,
  `id_session` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `absences`
--

INSERT INTO `absences` (`id`, `id_student`, `id_session`, `date`) VALUES
(1, 1, 1, '2015-05-04'),
(3, 3, 1, '2015-05-04'),
(4, 4, 2, '2015-05-04'),
(5, 5, 2, '2015-05-04'),
(6, 6, 2, '2015-05-04'),
(7, 7, 3, '2015-05-04'),
(8, 8, 3, '2015-05-04'),
(9, 9, 3, '2015-05-04'),
(12, 6, 5, '2015-05-04'),
(13, 4, 6, '2015-05-04'),
(14, 6, 6, '2015-05-04'),
(15, 7, 6, '2015-05-04'),
(16, 7, 7, '2015-05-04'),
(17, 9, 7, '2015-05-04'),
(18, 2, 5, '2015-05-07'),
(34, 1, 1, '2015-05-11'),
(35, 7, 1, '2015-05-04'),
(36, 4, 1, '2015-05-11'),
(37, 6, 2, '2015-04-06'),
(38, 7, 2, '2015-04-06'),
(39, 2, 2, '2015-04-06'),
(40, 6, 2, '2015-04-27'),
(41, 7, 2, '2015-04-27'),
(42, 1, 2, '2015-04-27'),
(43, 5, 14, '2015-04-15'),
(44, 1, 1, '2015-05-18'),
(45, 1, 2, '2015-05-11'),
(46, 1, 8, '2015-05-12'),
(47, 1, 8, '2015-05-19'),
(48, 1, 10, '2015-05-19'),
(49, 1, 14, '2015-05-13'),
(51, 6, 10, '2015-04-14'),
(52, 1, 10, '2015-04-14'),
(54, 9, 5, '2015-05-11'),
(57, 1, 14, '2015-04-29'),
(58, 1, 12, '2015-04-28'),
(59, 1, 12, '2015-04-21'),
(60, 2, 9, '2015-05-12'),
(61, 1, 9, '2015-05-12'),
(62, 5, 9, '2015-05-12'),
(63, 4, 9, '2015-05-12'),
(66, 5, 1, '2015-05-25'),
(67, 9, 1, '2015-05-25'),
(71, 7, 1, '2015-05-25'),
(72, 1, 1, '2015-05-25'),
(73, 3, 1, '2015-05-25'),
(74, 3, 12, '2015-05-19'),
(75, 2, 12, '2015-05-19'),
(77, 9, 12, '2015-05-19'),
(78, 5, 12, '2015-05-19'),
(79, 6, 2, '2015-06-08'),
(80, 2, 2, '2015-06-08'),
(81, 8, 7, '2015-06-08'),
(83, 5, 8, '2015-06-09'),
(84, 4, 8, '2015-06-09'),
(85, 6, 8, '2015-06-09'),
(92, 5, 7, '2015-06-08'),
(93, 4, 12, '2015-06-09'),
(94, 8, 12, '2015-06-09'),
(95, 17, 12, '2015-06-09'),
(97, 17, 8, '2015-06-09'),
(98, 3, 8, '2015-06-09'),
(99, 24, 1, '2015-06-08'),
(100, 7, 1, '2015-06-08'),
(101, 15, 1, '2015-06-08'),
(102, 5, 1, '2015-06-08'),
(103, 8, 1, '2015-06-08'),
(104, 4, 1, '2015-06-08'),
(107, 4, 11, '2015-06-02'),
(108, 8, 11, '2015-06-02'),
(109, 15, 24, '2015-05-07'),
(110, 17, 24, '2015-05-07'),
(111, 2, 24, '2015-05-07'),
(112, 4, 11, '2015-06-23'),
(113, 8, 11, '2015-06-23'),
(114, 7, 24, '2015-06-18'),
(115, 24, 24, '2015-06-18'),
(116, 17, 1, '2014-09-01'),
(117, 1, 1, '2014-09-08'),
(118, 1, 1, '2014-09-15'),
(119, 1, 1, '2014-09-01'),
(120, 1, 2, '2014-09-01'),
(121, 1, 4, '2014-09-01'),
(122, 17, 24, '2014-09-04'),
(123, 1, 6, '2014-09-15'),
(125, 1, 24, '2014-10-30'),
(126, 1, 14, '2014-10-29'),
(127, 1, 13, '2014-10-29'),
(129, 1, 12, '2014-10-28'),
(130, 1, 10, '2014-10-28'),
(131, 1, 9, '2014-10-28'),
(132, 1, 8, '2014-10-28'),
(133, 1, 6, '2014-10-27'),
(134, 1, 6, '2014-12-01'),
(135, 1, 4, '2014-12-01'),
(136, 1, 2, '2014-12-01'),
(137, 1, 1, '2014-12-01'),
(138, 1, 24, '2014-11-27'),
(139, 1, 14, '2014-11-26'),
(140, 1, 13, '2014-11-26'),
(142, 1, 9, '2014-11-25'),
(143, 1, 10, '2014-11-25'),
(144, 1, 12, '2014-11-25'),
(145, 1, 8, '2014-11-25'),
(146, 1, 6, '2014-11-24'),
(147, 1, 24, '2015-01-29'),
(148, 1, 14, '2015-01-28'),
(149, 1, 13, '2015-01-28'),
(151, 1, 12, '2015-01-27'),
(152, 1, 10, '2015-01-27'),
(153, 1, 12, '2015-03-03'),
(154, 1, 10, '2015-03-03'),
(155, 1, 9, '2015-03-03'),
(156, 1, 4, '2015-02-23'),
(157, 7, 13, '2015-06-24'),
(158, 24, 13, '2015-06-24'),
(168, 3, 8, '2015-12-08'),
(169, 7, 8, '2015-12-08'),
(170, 10, 8, '2015-12-08'),
(171, 1, 12, '2015-12-08'),
(172, 1, 8, '2015-12-08'),
(173, 10, 7, '2015-12-07'),
(174, 17, 8, '2016-01-26'),
(175, 1, 8, '2016-01-26'),
(176, 17, 2, '2016-01-25'),
(177, 1, 1, '2016-01-25'),
(178, 15, 8, '2016-01-26'),
(179, 8, 11, '2016-12-13'),
(180, 4, 11, '2016-12-13'),
(181, 5, 11, '2016-12-13'),
(182, 24, 10, '2016-12-13'),
(183, 2, 10, '2016-12-13'),
(184, 7, 10, '2016-12-13'),
(185, 23, 10, '2016-12-13'),
(186, 2, 8, '2016-12-13'),
(187, 7, 8, '2016-12-13'),
(188, 3, 8, '2016-12-13'),
(189, 17, 8, '2016-12-13'),
(190, 7, 9, '2016-12-13'),
(191, 2, 9, '2016-12-13'),
(192, 1, 10, '2016-12-13'),
(193, 17, 10, '2016-12-13'),
(194, 15, 10, '2016-12-13'),
(195, 3, 12, '2016-12-13'),
(196, 24, 12, '2016-12-13'),
(197, 5, 12, '2016-12-13'),
(198, 8, 12, '2016-12-13'),
(199, 4, 12, '2016-12-13'),
(200, 7, 12, '2016-12-13'),
(201, 23, 12, '2016-12-13'),
(202, 1, 12, '2016-12-13'),
(203, 17, 12, '2016-12-13'),
(204, 17, 10, '2016-12-06'),
(205, 1, 10, '2016-12-06'),
(206, 1, 2, '2016-12-05'),
(207, 17, 1, '2016-12-05'),
(208, 1, 1, '2016-12-05'),
(209, 2, 1, '2016-12-05'),
(210, 7, 1, '2016-12-05'),
(211, 23, 1, '2016-12-05'),
(212, 26, 9, '2017-07-25'),
(213, 23, 9, '2017-07-25');

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` int(10) NOT NULL,
  `name` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`id`, `name`) VALUES
(1, 'Monday'),
(2, 'Tuesday'),
(3, 'Wednesday'),
(4, 'Thursday'),
(5, 'Friday'),
(6, 'Saturday'),
(7, 'Sunday');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'C-111'),
(2, 'C-112');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `id_teacher` int(11) NOT NULL,
  `id_subject` int(11) NOT NULL,
  `id_time` int(11) NOT NULL,
  `id_day` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `id_teacher`, `id_subject`, `id_time`, `id_day`) VALUES
(24, 3, 1, 1, 4),
(14, 3, 5, 2, 3),
(5, 3, 5, 3, 1),
(10, 3, 5, 3, 2),
(1, 4, 1, 1, 1),
(8, 5, 2, 1, 2),
(2, 5, 2, 2, 1),
(7, 5, 2, 4, 1),
(12, 5, 6, 4, 2),
(3, 7, 3, 2, 1),
(9, 7, 3, 2, 2),
(6, 7, 3, 4, 1),
(13, 8, 4, 1, 3),
(4, 8, 4, 3, 1),
(11, 8, 4, 3, 2),
(25, 12, 2, 3, 1),
(26, 12, 4, 6, 4),
(27, 12, 4, 6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `session_groups`
--

CREATE TABLE `session_groups` (
  `id` int(11) NOT NULL,
  `id_session` int(11) NOT NULL,
  `id_group` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session_groups`
--

INSERT INTO `session_groups` (`id`, `id_session`, `id_group`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 3, 2),
(5, 4, 1),
(6, 5, 2),
(7, 6, 1),
(8, 7, 2),
(9, 8, 1),
(10, 8, 2),
(11, 9, 1),
(12, 9, 2),
(13, 10, 1),
(14, 11, 2),
(15, 12, 1),
(16, 12, 2),
(17, 13, 1),
(18, 13, 2),
(19, 14, 1),
(20, 14, 2),
(27, 24, 1),
(28, 25, 1),
(29, 25, 2),
(30, 26, 1),
(31, 27, 2);

-- --------------------------------------------------------

--
-- Table structure for table `session_times`
--

CREATE TABLE `session_times` (
  `id` int(10) NOT NULL,
  `time_start` time NOT NULL,
  `time_end` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session_times`
--

INSERT INTO `session_times` (`id`, `time_start`, `time_end`) VALUES
(1, '08:00:00', '09:20:00'),
(2, '09:35:00', '10:55:00'),
(3, '11:10:00', '12:30:00'),
(4, '12:40:00', '14:00:00'),
(5, '14:10:00', '15:30:00'),
(6, '15:40:00', '17:00:00'),
(7, '17:10:00', '18:30:00'),
(8, '18:40:00', '20:00:00'),
(9, '20:10:00', '21:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `id_user`, `id_group`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 6, 1),
(4, 7, 2),
(5, 8, 2),
(6, 16, 1),
(7, 17, 1),
(8, 18, 2),
(9, 19, 2),
(10, 20, 2),
(15, 28, 1),
(17, 31, 1),
(23, 26, 1),
(24, 27, 1),
(26, 33, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `short_name` varchar(16) NOT NULL,
  `full_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `short_name`, `full_name`) VALUES
(1, 'SOTR', 'Sisteme de Operare si Topologia Retelelor'),
(2, 'IC', 'Ingineria Calculatoarelor'),
(3, 'PS', 'Prelucrarea Semnalelor'),
(4, 'PLIA', 'Programarea Logica si Inteligenta Artificiala'),
(5, 'TPRC', 'Testarea si Proiectarea Sistemelor de Calculatoare'),
(6, 'PSM', 'Proiectarea Sistemelor cu Microprocesoare'),
(7, 'AA', 'Arhitecturi Avansate');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(10) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `id_user`) VALUES
(13, 3),
(2, 4),
(3, 9),
(4, 10),
(5, 11),
(6, 12),
(7, 13),
(8, 14),
(9, 15),
(10, 29),
(12, 34);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `card_number` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `address` varchar(50) NOT NULL,
  `permissions` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `card_number`, `email`, `password`, `phone`, `address`, `permissions`) VALUES
(1, 'Radu', 'Nemerenco', 111229, 'r.nemerenco@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37379140606', 'Glodeni, 19 TItu Maiorescu street', ''),
(2, 'Dan', 'Iftodi', 112224, 'daniftodi@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chiisnau, str Alecu Russo, 3', ''),
(3, 'Victor', 'Ababii', 111110, 'victorababii@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, Str. Studentilor 7/1', ''),
(4, 'Ion', 'Morosanu', 111234, 'ionmorosanu@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(6, 'Onorina', 'Maznic', 112225, 'onorinamaznic@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(7, 'Marina', 'Emilianova', 112236, 'marinaemolianova@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(8, 'Ludmila', 'Stratan', 112237, 'ludmilastratan@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(9, 'Emilian', 'Gutuleac', 100008, 'emiliangutuleac@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(10, 'Victor', 'Moraru', 110224, 'victormoraru@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(11, 'Igor', 'Calmicov', 110012, 'igorcalmicov@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(12, 'Viorel', 'Carbune', 100243, 'viorelcarbune@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(13, 'Marin', 'Podubnii', 100242, 'marinpodubnii@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37369696969', 'Chisinau, str. Studentilor 7/1', ''),
(14, 'L', 'Luchianov', 998745, 'luchianov.l@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079142536', 'Chisinau, str. Albisoara 88/8', ''),
(15, 'S', 'Zaporojan', 998765, 's.zaporojan@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '069696969', 'Chisinau, str.Studentilor 7/2', ''),
(16, 'Ion', 'Caimacan', 111245, 'ion.caimacan@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079252525', 'Chisinau, Db Moscova 1', ''),
(17, 'Dumitru', 'Cotofana', 111246, 'dumitru.cotofana@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079252525', 'Chisinau, Db Moscova 1', ''),
(18, 'Teodor', 'Mamolea', 111247, 'teodor.mamolea@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079252525', 'Chisinau, Db Moscova 1', ''),
(19, 'Viorel', 'Zota', 111250, 'viorel.zota@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079252525', 'Chisinau, Db Moscova 1', ''),
(20, 'Viorel', 'Tirsina', 111248, 'viorel.tirsina@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079252525', 'Chisinau, Db Moscova 1', ''),
(26, 'Maxim', 'Costasco', 111240, 'maximcostasco@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '066633669', 'Chisinau, str.Albisoara', ''),
(27, 'Stefan', 'Luchian', 111298, 'stefanluchian@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '066633660', 'Chisinau, str.Albisoara', ''),
(28, 'Tudorel', 'Ostrovan', 111222, 'tudorel.ostrovan@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '079060606', 'Chisinau, Kiev 2/1', ''),
(29, 'Radu', 'Nemerenco', 123456, 'admin@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '0123456789', 'Chisinau', 'admin'),
(31, 'Radu', 'Nemerenco', 654321, '654321@gmail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+373987654321', '19 Titu Maiorescu street', ''),
(32, 'Radu', 'Nemerenco', 100001, 'admin@host.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37379000000', 'Chelmsford Road, Great Waltham, Chelmsford, Essex ', 'admin'),
(33, 'Will', 'Black', 100002, 'student@host.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37379022221', '38-40 Pilgrim Street, Newcastle upon Tyne, Tyne an', ''),
(34, 'John', 'Smith', 100003, 'teacher@host.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '+37379022223', '1A Heather Grove, Wigan, Wigan WN5 9PJ, UK', ''),
(35, '1212', '1212', 1212, '1212@mail.com', '$2a$10$b97cbe5cf6ccf65a226e5um5s6XOv.arqyH2YfPxg2TTOL0w8BzIq', '12121212', '121212', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absences`
--
ALTER TABLE `absences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_student` (`id_student`,`id_session`),
  ADD KEY `id_session` (`id_session`);

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prof` (`id_teacher`,`id_subject`,`id_time`,`id_day`),
  ADD KEY `id_subject` (`id_subject`),
  ADD KEY `id_time` (`id_time`),
  ADD KEY `id_day` (`id_day`);

--
-- Indexes for table `session_groups`
--
ALTER TABLE `session_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_session` (`id_session`,`id_group`),
  ADD KEY `id_group` (`id_group`);

--
-- Indexes for table `session_times`
--
ALTER TABLE `session_times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_person_2` (`id_user`),
  ADD KEY `id_person` (`id_user`),
  ADD KEY `id_group` (`id_group`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_person_2` (`id_user`),
  ADD KEY `id_person` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`card_number`),
  ADD UNIQUE KEY `login_2` (`card_number`),
  ADD UNIQUE KEY `login_3` (`card_number`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `id` (`id`,`card_number`,`email`,`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absences`
--
ALTER TABLE `absences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=214;
--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `session_groups`
--
ALTER TABLE `session_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `session_times`
--
ALTER TABLE `session_times`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `absences`
--
ALTER TABLE `absences`
  ADD CONSTRAINT `absence_session_fk` FOREIGN KEY (`id_session`) REFERENCES `sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `absence_student_fk` FOREIGN KEY (`id_student`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `session_day_fk` FOREIGN KEY (`id_day`) REFERENCES `days` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_subject_fk` FOREIGN KEY (`id_subject`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_teacher_fk` FOREIGN KEY (`id_teacher`) REFERENCES `teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_time_fk` FOREIGN KEY (`id_time`) REFERENCES `session_times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `session_groups`
--
ALTER TABLE `session_groups`
  ADD CONSTRAINT `sessiongroup_group_fk` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sessiongroup_session_fk` FOREIGN KEY (`id_session`) REFERENCES `sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `student_group_fk` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_person_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `teacher_person_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
