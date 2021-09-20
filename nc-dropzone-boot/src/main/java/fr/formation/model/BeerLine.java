package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Beer line")
public class BeerLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_LINE_ID")
    private int id;

    @Column(name = "BEER_LINE_NOM_MEMBRE")
    private Parachutiste parachutiste;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Parachutiste getParachutiste() {
        return parachutiste;
    }

    public void setParachutiste(Parachutiste parachutiste) {
        this.parachutiste = parachutiste;
    }

    public BeerLine(Parachutiste parachutiste) {
        this.parachutiste = parachutiste;
    }

}
