package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.formation.model.BeerLine;
import fr.formation.model.Parachutiste;

public interface IBeerLineDaoJpaRepository extends JpaRepository<BeerLine, Integer> {
    @Query("select b from BeerLine b left join fetch b.parachutistes")
	public List<Parachutiste> findAllFetchingParachutistes();
}
