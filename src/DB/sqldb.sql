﻿-- sqldb.sql
CREATE DATABASE Users;
GO

USE Users;
GO


CREATE TABLE PNC (
    MATRICULE VARCHAR(255),
    Nom VARCHAR(255),
    Prenom VARCHAR(255),
    BASE VARCHAR(255),
    COLLEGE VARCHAR(255),
    SECTEUR VARCHAR(255),
    Pwd VARCHAR(255)
);
GO

-- Insert the data into the PNC table
INSERT INTO PNC (MATRICULE, Nom, Prenom, BASE, COLLEGE, SECTEUR, Pwd) VALUES
('08799', 'TIKIKOIYTIKIKOIR', 'RPOIFIK', 'TUN', 'C/C', 'PNC', 'nGNsXuIMIptp'),
('08803', 'GFTIKHTIKIKOIGFTIKTIKIKI', 'DPOILILPOI', 'TUN', 'C/C', 'PNC', 'VErNoIZhuEAE'),
('08804', 'EN GFTIKTIKIKOIRTIKIKOUK', 'SLIGFT', 'TUN', 'PNC', 'PNC', 'PsWIyXKwEqkJ'),
('08810', 'KERGFTIKTIKIKOINI', 'SPOIGFTI', 'MIR', 'C/C', 'PNC', 'NALiUxxwjZQh'),
('08813', 'NECHI', 'SIHEGFT', 'TUN', 'C/C', 'PNC', 'ryJCqsWCCdAU'),
('08817', 'TIKIKOITIKIKTIKIKTIKIKOILTIKIKOIH', 'OLFPOI', 'TUN', 'PNC', 'PNC', 'ynkCyJXXkCkA'),
('08820', 'CHTIKIKOIRFETIKIKTIKIKINE', 'GFTOUNPOI', 'TUN', 'PNC', 'PNC', 'NcTpwAwozDwW'),
('08824', 'HTIKIKOIII', 'SIHEGFT', 'TUN', 'PNC', 'PNC', 'xFMMaEsGFlgZ'),
('08848', 'TIKIKOITIKIKCHI', 'SPOIRRPOI', 'TUN', 'PNC', 'PNC', 'BvbXNHtoMqJV'),
('08852', 'CHENNOUFI', 'NOZHPOI', 'TUN', 'PNC', 'PNC', 'RoDxJGiWqsMG');
GO
