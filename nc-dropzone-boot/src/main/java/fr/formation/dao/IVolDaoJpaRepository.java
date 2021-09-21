package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.formation.model.EtatVol;
import fr.formation.model.Vol;

public interface IVolDaoJpaRepository extends JpaRepository<Vol, Integer>{
    @Query("select v from Vol v where v.etatVol = ?1")
    public List<Vol> findAllByEtatVol(EtatVol etat);
}
