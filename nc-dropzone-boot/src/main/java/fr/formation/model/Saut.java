package fr.formation.model;

import static org.mockito.ArgumentMatchers.nullable;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Saut")
public class Saut {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "INVENTAIRE_ID", nullable = false)
    private int id;

    @Column(name = "LISTE_PARTICIPANTS", nullable = false)
    private List<Parachutiste> parachutiste;

    @Column(name = "ATTERRISSAGE_RATE")
    private boolean isOutsideZone;

    @Column(name = "VOL")
    private Vol vol;
    
}
