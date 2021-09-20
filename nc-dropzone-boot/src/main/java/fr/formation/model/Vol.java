package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vol")
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VOL_ID")
    private int id;

    @ManyToOne
    @JoinColumn(name = "VOL_AVION_ID")
    private Avion avion;

    @ManyToOne
    @JoinColumn(name = "VOL_PILOTE_ID")
    private Pilote pilote;
    
}
