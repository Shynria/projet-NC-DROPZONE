package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.SautTandem;
import fr.formation.model.Vol;

public interface ISautTandemDaoJpaRepository extends JpaRepository<SautTandem, Integer> {
    public List<SautTandem> findAllByVol(Vol vol);
    
}
