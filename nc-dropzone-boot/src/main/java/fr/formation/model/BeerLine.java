package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "Beer_line")
public class BeerLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_LINE_ID")
    @JsonView(Views.Commons.class)
    private int id;

    
    @OneToOne
    @JoinColumn(name = "BEER_LINE_MEMBRE")
    @JsonView({Views.BeerLine.class, Views.Parachutiste.class})
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

    

    

}
