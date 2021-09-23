package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Saut;
import fr.formation.model.Vol;

public interface ISautDaoJpaRepository extends JpaRepository<Saut, Integer> {
    public List<Saut> findAllByVol(Vol vol);
}
