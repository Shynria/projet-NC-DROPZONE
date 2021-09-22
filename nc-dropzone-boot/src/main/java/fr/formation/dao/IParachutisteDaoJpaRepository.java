package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.formation.model.Niveau;
import fr.formation.model.Parachutiste;

public interface IParachutisteDaoJpaRepository extends JpaRepository<Parachutiste, Integer> {
    @Query("select p.nom from Parachutiste p where p.nom = ?1")
    public List<Parachutiste> findAllByNom(String nom);

    public List<Parachutiste> findAllByNiveau(Niveau niveau);
}
