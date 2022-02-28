-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Lut 2022, 11:09
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `crime_reports_projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `police_officers`
--

CREATE TABLE `police_officers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `password_hash` varchar(60) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `police_officers`
--

INSERT INTO `police_officers` (`id`, `name`, `surname`, `email`, `password_hash`) VALUES
(1, 'Jake', 'Peralta', 'jake.peralta@nypd.org', '$2b$10$iPeNYSgAEKah8gX4rDgP8.LNg3/GXGyMSFQgtdgQYwiOqq5DhEtx2'),
(2, 'Amy', 'Santiago', 'amy.santiago@nypd.org', '$2b$10$LIDK4Sc6wraL4qvUd4RyoOsVHK.7r1BuiQsZkqolr/NHhS6KvW3Fa'),
(3, 'Rosa', 'Diaz', 'rosa.diaz@nypd.org', '$2b$10$AvcBvVPgpda2Ojx7XWg.eeLtRmxylNmSvme0Xj6NPOlSIhleO88l2'),
(4, 'Terry', 'Crews', 'terry.crews@nypd.org', '$2b$10$yVO78FWOCzpnMH8cJEgK4.CYOkYpUEaJNVULKIjqiN8pbKYLBkTH6'),
(5, 'Ray', 'Holt', 'ray.holt@nypd.org', '$2b$10$2PV6UA0HFRX5WX5Yuzg8WuNcID5FcjOJXgJ0Y6eypuspkswC1RVme');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `report_description` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `area_code` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `street` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `flat_number` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `caller_name` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `contact_number` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `status` enum('reported','in progress','completed','canceled') COLLATE utf8_polish_ci NOT NULL,
  `badge_number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `reports`
--

INSERT INTO `reports` (`id`, `report_description`, `area_code`, `city`, `street`, `flat_number`, `caller_name`, `contact_number`, `status`, `badge_number`) VALUES
(1, 'There are some people robbing someone here! Send someone ASAP', '11225', 'New York', 'Lefferts Ave x Brooklyn Ave', '52', 'Tanya', '481047', 'in progress', 1),
(2, 'Some bastards just broke in to my car, they smashed all my windows, I need someone here. I\'m waiting just outside Pletzel Pizza', '11203', 'New York', '545 Maple st', '', 'Karen', NULL, 'reported', NULL),
(3, 'We have an unruly patient here at Kingsbrook Jewish Medical Center', '11203', 'New York', '585 Schenectady Ave', '', 'Lisa Cuddy', '+17186045000', 'reported', NULL),
(4, 'Someone attacked me', '11203', 'New York', '545 Maple st', '346', '', '', 'reported', NULL),
(5, 'My car just got stolen', '11221', 'New York', 'Irish St', '2', 'Mike', '+17124372010', 'reported', NULL),
(6, 'I just came back from vacation and it seems that my house has been robbed I would like to request a police officer here', '11203', 'New York', 'Robbery St', '432', 'Gregory', '+17181272010', 'reported', NULL),
(7, 'Hey, I need help, I\'m being attacked by my husband in my flat, please send someone here but silently, don\'t call me', '11252', 'New York', 'Apple Ave', '52', 'Morgan', '+17430072010', 'reported', NULL),
(8, 'Some kids just broke my window', '12103', 'New York', 'Aviators St', '43', 'Sidney', '+17181273166', 'reported', NULL);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `police_officers`
--
ALTER TABLE `police_officers`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `badge_number` (`badge_number`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `police_officers`
--
ALTER TABLE `police_officers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`badge_number`) REFERENCES `police_officers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
